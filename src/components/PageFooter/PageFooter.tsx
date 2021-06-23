import React from 'react'

import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { NavButton } from 'components/NavButton/NavButton'

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
  return (
    <div
      style={{ width: 'inherit' }}
      className={clsx(props.className, 'flex flex-row items-center justify-between')}
    >
      <div className="flex flex-row items-center w-max">
        {props.lastStepRoute && (
          <NavButton
            direction="last"
            label={props.lastStepLabel}
            onClick={() => history.push(props.lastStepRoute!)}
            className="mr-6"
          />
        )}
        <InformationButton />
      </div>
      {props.nextStepRoute && (
        <NavButton
          direction="next"
          label={props.nextStepLabel}
          onClick={() => history.push(props.nextStepRoute!)}
        ></NavButton>
      )}
    </div>
  )
}
