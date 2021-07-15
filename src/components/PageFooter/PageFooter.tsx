import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import { useHistory, useLocation } from 'react-router-dom'
import { NavButton } from 'components/NavButton/NavButton'
import { Step, steps } from 'data'

export interface PageFooterProps {
  nextStepLabel?: string
  nextStepRoute?: string
  lastStepLabel?: string
  lastStepRoute?: string
  // resources?: {}[]
  className?: string
}

const InformationButton = () => {
  return (
    <button className="h-8 transition duration-200 ease-in-out bg-yellow-300 rounded-full cursor-pointer hover:shadow-md hover:bg-yellow-400">
      <div className="flex flex-row px-4 py-1">
        <p className="flex-1 font-serif italic font-bold">i</p>
        <p className="flex-1 ml-3 text-gray-800">Information</p>
      </div>
    </button>
  )
}

export const PageFooter: React.FC<PageFooterProps> = (props) => {
  const history = useHistory()
  const location = useLocation()

  const thisStepIndex = (): number => {
    return steps.findIndex((step) => {
      return step.route === location.pathname
    })
  }

  const [stepIndex, setStepIndex] = useState(thisStepIndex)
  useEffect(() => setStepIndex(thisStepIndex()), [location])

  return (
    <div
      style={{ width: 'inherit' }}
      className={clsx(props.className, 'flex flex-row items-center justify-between')}
    >
      <div className="flex flex-row items-center w-max">
        {stepIndex > 0 && (
          <NavButton
            direction="last"
            label={steps[stepIndex - 1].title}
            onClick={() => history.push(steps[stepIndex - 1].route)}
            className="mr-6"
          />
        )}
        <InformationButton />
      </div>
      {stepIndex < steps.length - 1 && (
        <NavButton
          direction="next"
          label={steps[stepIndex + 1].title}
          onClick={() => history.push(steps[stepIndex + 1].route)}
        ></NavButton>
      )}
    </div>
  )
}
