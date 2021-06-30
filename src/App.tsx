import Sidebar from 'react-sidebar'
import { Navigation } from 'components/Navigation/Navigation'
import React from 'react'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AppContext, useContextReducer } from './context'
import { PageHeader } from 'components/PageHeader/PageHeader'

import { Home } from 'views'

import * as data from 'data'
import { PageFooter } from './components/PageFooter/PageFooter'

const App: React.FC<{}> = () => {
  const [context, dispatch] = useContextReducer()

  const completeStep = (route: string) => {
    dispatch({ type: 'setStepCompleted', payload: { step: route } })
  }

  return (
    <Router>
      <AppContext.Provider value={[context, dispatch]}>
        <div className="max-h-screen max-w-screen">
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
              {data.steps.map((step, i) => {
                const StepView = step.component
                return (
                  <Route exact path={step.route}>
                    <div
                      style={{ height: 'calc(100vh - 2.5rem)' }}
                      className="container w-full max-w-5xl px-12 py-5 mx-auto overflow-scroll min-w-2xl"
                    >
                      <PageHeader
                        title={String(step.index! + 1).padStart(2, '0') + ' / ' + step.title}
                        description={step.header.description}
                        prompt={step.header.prompt}
                      ></PageHeader>
                      <div style={{ height: 'calc(100vh - 14.9rem)' }} className="pt-6 pb-3">
                        <StepView
                          onComplete={() => {
                            completeStep(step.route)
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full mb-1 bg-white h-14">
                      <PageFooter
                        className="w-full max-w-5xl px-12 pt-2.5 pb-2 mx-auto border-gray-200 min-w-2xl"
                        lastStepRoute={i > 0 ? data.steps[i - 1].route : undefined}
                        nextStepRoute={
                          i < data.steps.length - 1 ? data.steps[i + 1].route : undefined
                        }
                      />
                    </div>
                  </Route>
                )
              })}
            </Sidebar>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default App
