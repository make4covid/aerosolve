import Sidebar from 'react-sidebar'
import { Navigation } from 'components/Navigation/Navigation'
import React, { useEffect } from 'react'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AppContext, useContextReducer } from './context'
import { PageHeader } from 'components/PageHeader/PageHeader'

import { Home } from 'views'

import * as data from 'data'
import { PageFooter } from './components/PageFooter/PageFooter'
import { getIndoorModel } from 'service/IndoorService'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'

const App: React.FC<{}> = () => {
  const [context, dispatch] = useContextReducer()

  const completeStep = (route: string) => {
    context.stepStatus[route].complete ||
      dispatch({ type: 'setStepCompleted', payload: { step: route } })
  }

  const debounceFetchModel = useCallback(
    debounce((model) => {
      getIndoorModel(model).then((r: any) => {
        dispatch({
          type: 'setSafeRecommendations',
          payload: { safeHours: r['max_hour'] },
        })
      })
    }, 400),
    []
  )

  useEffect(() => {
    debounceFetchModel(context.model)
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
                <div className="w-full">
                  <Link to="/">
                    <AerosolveLogo />
                  </Link>
                  <Navigation navGroups={data.navGroups} />
                </div>
              }
            >
              <div
                style={{ height: 'calc(100vh - 2.5rem)' }}
                className="min-w-2xl container w-full max-w-5xl py-5 mx-auto overflow-scroll"
              >
                <PageHeader />
                {data.steps.map((step, i) => {
                  const StepView = step.component
                  return (
                    <Route exact path={step.route}>
                      <div className="px-12">
                        <div style={{ height: 'calc(100vh - 14.9rem)' }} className="pt-6 pb-3">
                          <StepView
                            onComplete={() => {
                              completeStep(step.route)
                            }}
                          />
                        </div>
                      </div>
                    </Route>
                  )
                })}
              </div>
              <div className="h-14 absolute bottom-0 w-full mb-1 bg-white border-t border-gray-200">
                <PageFooter className="w-full max-w-5xl pt-2.5 pb-2 mx-auto  min-w-2xl px-12" />
              </div>
            </Sidebar>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default App
