import Sidebar from 'react-sidebar'
import { Navigation } from 'components/Navigation/Navigation'
import React, { useEffect } from 'react'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AppContext, useContextReducer } from './context'
import { HeaderWrapper } from 'components/PageHeader/PageHeader'

import { Home } from 'views'

import * as data from 'data'
import { PageFooter } from './components/PageFooter/PageFooter'
import { getIndoorModel } from 'service/IndoorService'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { RecommendationList } from 'views/RecommendationList'
import { Information } from 'views/Information'

const App: React.FC<{}> = () => {
  const [context, dispatch] = useContextReducer()

  const completeStep = (route: string) => {
    context.stepStatus[route].complete ||
      dispatch({ type: 'setStepCompleted', payload: { step: route } })
  }

  const debounceFetchModel = useCallback(
    // (model) => {
    debounce((model) => {
      getIndoorModel(model).then((r: any) => {
        dispatch({
          type: 'setSafeRecommendations',
          payload: { safeHours: r['max_hour'], safeOccupancy: r['max_people'] },
        })
      })
    }, 400),
    // },
    [dispatch]
  )

  useEffect(() => {
    debounceFetchModel(context.model)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, Object.values(context.model))

  return (
    <Router>
      <AppContext.Provider value={[context, dispatch]}>
        <div className="max-w-screen max-h-screen">
          <Switch>
            <Route exact path="/">
              <Home startRoute={data.steps[0].route} />
            </Route>
            <Sidebar
              sidebarClassName="fixed left-0 max-w-xs px-8 py-2 bg-gray-200 w-72 shadow-lg"
              transitions={false}
              docked
              shadow={false}
              open
              sidebar={
                <div className="flex flex-col w-full h-full">
                  <Link to="/">
                    <AerosolveLogo />
                  </Link>
                  <Navigation navGroups={data.navGroups} />
                </div>
              }
            >
              {/* quick fix to make sure these cyan colors get bundled */}
              <div className="text-light-blue-500 border-light-blue-500 hidden" />
              <div className="flex flex-col justify-between w-full h-screen max-h-screen">
                <div className="min-w-2xl container flex-grow-0 flex-shrink-0 w-11/12 max-w-6xl mx-auto mt-4">
                  <HeaderWrapper />
                </div>
                <div className="min-w-2xl container flex flex-col flex-grow flex-shrink w-11/12 h-full max-w-6xl mx-auto mt-6 overflow-scroll">
                  {data.steps.map((step, i) => {
                    const StepView = step.component
                    return (
                      <Route key={step.route} exact path={step.route}>
                        <div className="h-full px-12 pt-2 pb-2">
                          <StepView
                            onComplete={() => {
                              completeStep(step.route)
                            }}
                          />
                        </div>
                      </Route>
                    )
                  })}
                  <Route exact path="/recommendations">
                    <div className="px-12 pb-4 mt-6">
                      <RecommendationList />
                    </div>
                  </Route>
                  <Route exact path="/information">
                    <div className="px-12 pb-12">
                      <Information />
                    </div>
                  </Route>
                </div>
                <div className="z-10 w-full bg-white border-t border-gray-200">
                  <PageFooter className="pt-2.5 min-w-2xl mb-2.5 w-11/12 max-w-6xl px-12 mx-auto" />
                </div>
              </div>
            </Sidebar>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default App
