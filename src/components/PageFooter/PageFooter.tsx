import React from 'react'

import { ReactComponent as LeftArrow } from 'assets/icons/arrow-circle-left.svg'
import { ReactComponent as RightArrow } from 'assets/icons/arrow-circle-right.svg'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

export interface PageFooterProps {
  lastStepRoute?: string
  nextStepRoute?: string
  resources?: {}[]
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
  const arrowClasses = clsx(
    'w-8 h-8 text-gray-500 transition-colors duration-200 cursor-pointer fill-current hover:text-blue-500'
  )
  return (
    <div
      style={{ width: 'inherit' }}
      className={clsx(props.className, 'flex flex-row items-center justify-between')}
    >
      <div className="flex flex-row items-center w-max">
        {props.lastStepRoute && (
          <LeftArrow
            className={clsx('mr-3', arrowClasses)}
            onClick={() => history.push(props.lastStepRoute!)}
          />
        )}
        <InformationButton />
      </div>
      {props.nextStepRoute && (
        <RightArrow className={arrowClasses} onClick={() => history.push(props.nextStepRoute!)} />
      )}
    </div>
  )
}
