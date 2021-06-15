import React from 'react'

import { ReactComponent as LeftArrow } from 'assets/icons/arrow-circle-left.svg'
import { ReactComponent as RightArrow } from 'assets/icons/arrow-circle-right.svg'
import clsx from 'clsx'

export interface PageFooterProps {
  lastStep: () => void
  nextStep: () => void
  resources?: {}[]
}

const InformationButton = () => {
  return (
    <button className="h-8 mx-3 transition duration-200 ease-in-out bg-yellow-300 rounded-full cursor-pointer hover:shadow-md hover:bg-yellow-400">
      <div className="flex flex-row px-4 py-1">
        <p className="flex-1 font-serif italic font-bold">i</p>
        <p className="flex-1 ml-3 text-gray-800">Information</p>
      </div>
    </button>
  )
}

export const PageFooter: React.FC<PageFooterProps> = (props) => {
  const arrowClasses = clsx(
    'w-8 h-8 text-gray-500 transition-colors duration-200 cursor-pointer fill-current hover:text-blue-500'
  )
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center w-max">
        <LeftArrow
          className={arrowClasses}
          onClick={() => {
            props.lastStep()
          }}
        />
        <InformationButton />
      </div>
      <RightArrow
        className={arrowClasses}
        onClick={() => {
          props.nextStep()
        }}
      />
    </div>
  )
}
