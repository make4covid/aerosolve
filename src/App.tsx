import './App.css'

import Sidebar from 'react-sidebar'
import { Navigation } from 'components/Navigation/Navigation'
import React, { useReducer } from 'react'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AppContext, contextReducer, initialState, Actions } from './context'
import { PageHeader } from 'components/PageHeader/PageHeader'

import { Home } from 'views'

import * as data from 'data'

const App: React.FC<{}> = (props) => {
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
              {data.steps.map((step) => {
                const StepView = step.component
                return (
                  <Route exact path={step.route}>
                    <div className="w-4/5 max-w-4xl max-h-screen px-10 py-5 mx-auto min-w-2xl">
                      <PageHeader
                        title={String(step.index! + 1).padStart(2, '0') + ' / ' + step.title}
                        description={step.header.description}
                        prompt={step.header.prompt}
                      ></PageHeader>
                      <StepView
                        onComplete={() => {
                          completeStep(step.route)
                        }}
                      ></StepView>
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
