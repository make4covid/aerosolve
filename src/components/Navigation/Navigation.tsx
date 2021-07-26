import React, { CSSProperties, useContext, useMemo, useState } from 'react'
import { AppContext } from 'context'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { ReactComponent as Checkmark } from 'assets/svg/checkmark.svg'
import clsx from 'clsx'
import { Button } from 'components/Button/Button'
import { useEffect } from 'react'
import { steps } from 'data'

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
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const location = useLocation()
  const history = useHistory()
  const [{ stepStatus, stepsComplete }] = useContext(AppContext)

  // const [enableRecLink, setEnableRecLink] = useState(false)

  return (
    <div className="w-full">
      {props.navGroups.map((group) => (
        <NavigationGroup header={group.header}>
          {group.steps.map((step, i) => {
            return (
              <NavigationStep
                top={i === 0}
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
      <Link to="/recommendations">
        <button
          disabled={!stepsComplete}
          className={clsx(
            'rounded-lg w-full px-4 py-4 mt-4 text-sm cursor-pointer',
            stepsComplete &&
              'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors duration-150',
            !stepsComplete && ' bg-gray-300'
          )}
        >
          {stepsComplete
            ? 'View recommendations for making your space safer'
            : 'Complete the steps above to see recommendations'}
        </button>
      </Link>
    </div>
  )
}

const NavigationGroup: React.FC<{ header: string }> = (props) => {
  return (
    <div className="my-3.5 sidebarGroup">
      <h1 className="sidebarGroupHeader flex mx-2 my-1 font-sans text-sm font-bold text-center text-gray-500">
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
  top?: boolean
}

const NavigationStep: React.FC<NavStepProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={props.style}
      className={clsx(
        'text-sm relative flex flex-row items-center justify-between px-3 py-1.5 bg-white transition duration-200',
        props.top || 'border-t',
        props.active && 'text-white bg-blue-600 cursor-default',
        props.active || 'text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer',
        props.complete && !props.active && 'text-blue-600 hover:bg-blue-100 cursor-pointer'
        // props.active && props.complete &&
      )}
    >
      <div>{props.title}</div>
      {props.complete && <Checkmark className="w-5 h-5 fill-current" />}
    </div>
  )
}
