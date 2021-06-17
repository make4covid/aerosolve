import Sidebar from 'react-sidebar'
import { Navigation } from 'components/Navigation/Navigation'
import React, { useReducer } from 'react'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom'

import { AppContext, contextReducer, initialState, Actions } from './context'
import { PageHeader } from 'components/PageHeader/PageHeader'

import { Home } from 'views'

import * as data from 'data'
import { PageFooter } from './components/PageFooter/PageFooter'

const App: React.FC<{}> = (props) => {
  const history = useHistory()
  const [state, setState] = useReducer(contextReducer, initialState)

  const completeStep = (route: string) => {
    setState({ type: Actions.setStepCompleted, payload: { step: route } })
  }

  return (
    <Router>
      <AppContext.Provider value={state}>
        <div className="max-h-screen max-w-screen">
          <Sidebar
            sidebarClassName="fixed left-0 max-w-xs p-8 bg-gray-200 w-80" // TODO: Add responsive styling for larger displays
            docked
            shadow={false}
            open
            sidebar={
              <div className="w-full">
                <AerosolveLogo />
                <Navigation navGroups={data.navGroups} stepStatus={state.stepStatus} />
              </div>
            }
          >
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              {data.steps.map((step, i) => {
                const StepView = step.component
                return (
                  <Route exact path={step.route}>
                    <div
                      style={{ maxHeight: 'calc(100vh - 3.5rem)' }}
                      className="container w-full max-w-6xl max-h-screen px-12 py-5 mx-auto overflow-scroll min-w-2xl"
                    >
                      <PageHeader
                        title={String(step.index! + 1).padStart(2, '0') + ' / ' + step.title}
                        description={step.header.description}
                        prompt={step.header.prompt}
                        hours={30}
                        people={30}
                      ></PageHeader>
                      <StepView
                        onComplete={() => {
                          completeStep(step.route)
                        }}
                      />
                    </div>
                    <div className="absolute bottom-0 w-full mb-1 bg-white h-14">
                      <PageFooter
                        className="w-full max-w-6xl px-12 pt-3 pb-2 mx-auto border-t border-gray-200 min-w-2xl"
                        lastStepRoute={i > 0 ? data.steps[i - 1].route : undefined}
                        nextStepRoute={
                          i < data.steps.length - 1 ? data.steps[i + 1].route : undefined
                        }
                      />
                    </div>
                  </Route>
                )
              })}
            </Switch>
          </Sidebar>
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default App
