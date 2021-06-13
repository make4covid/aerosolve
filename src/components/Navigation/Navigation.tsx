import React, { CSSProperties, useContext } from 'react'
import { AppContext } from 'context'
import { useHistory, useLocation } from 'react-router-dom'
import { ReactComponent as Checkmark } from 'assets/icons/checkmark.svg'
import clsx from 'clsx'

export interface NavGroupStep {
  title: string
  route: string
}

export type NavGroup = {
  header: string
  steps: NavGroupStep[]
}

export type StepStatus = {
  [stepRoute: string]: {
    complete: boolean
  }
}

export interface NavigationProps {
  navGroups: NavGroup[]
  stepStatus: StepStatus
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const location = useLocation()
  const history = useHistory()
  const { stepStatus } = useContext(AppContext)

  return (
    <div className="w-full">
      {props.navGroups.map((group) => (
        <NavigationGroup header={group.header}>
          {group.steps.map((step) => {
            return (
              <NavigationStep
                route={step.route}
                title={step.title}
                active={step.route === location.pathname}
                complete={stepStatus[step.route].complete}
                onClick={() => {
                  history.push(step.route)
                }}
              ></NavigationStep>
            )
          })}
        </NavigationGroup>
      ))}
    </div>
  )
}

const NavigationGroup: React.FC<{ header: string }> = (props) => {
  return (
    <div className="my-4 sidebarGroup">
      <h1 className="flex mx-2 my-1 font-sans text-sm font-bold text-center text-gray-500 sidebarGroupHeader">
        {props.header}
      </h1>
      <div className="w-full overflow-hidden rounded-md">{props.children}</div>
    </div>
  )
}

type NavStepProps = NavGroupStep & {
  complete: boolean
  active: boolean
  onClick: () => void
  style?: CSSProperties
}

const NavigationStep: React.FC<NavStepProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={props.style}
      className={clsx(
        'font-sans font-normal relative flex flex-row items-center justify-between px-4 py-2 bg-white transition duration-200 border-t cursor-pointer',
        props.active && 'text-white bg-blue-600 cursor-default',
        props.active || 'text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer',
        props.complete && 'text-blue-600 hover:bg-blue-100 cursor-pointer'
      )}
    >
      <div>{props.title}</div>
      {props.complete && <Checkmark className={'fill-current'} height="24" width="24" />}
    </div>
  )
}