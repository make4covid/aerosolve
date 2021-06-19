import React from 'react'
import {ReactComponent as Kids} from 'assets/images/kids.svg'

export interface SelectionOptions {
  title: string
  description: string
  image?: string //For display image in TypeOfSpace MainPanel
  rating?: string
}

export const MainCard: React.FC<SelectionOptions> = ({ ...props }) => {
  return (
    <div className="flex flex-row w-full h-full" {...props}>
      <div className="flex-1">
        <div className="flex flex-col">
          <div className="flex-1 m-4 text-3xl font-bold text-gray-500">{props.title}</div>
          <div className="flex-1 m-4 text-base font-bold text-gray-500">{props.description}</div>
        </div>
      </div>
      <div className="z-10 flex-1 w-full h-full">
        <Kids/>
      </div>

      <div className="relative z-20 h-12 my-4 mr-4 bg-blue-500 flex-2 w-44 rounded-2xl right-1">
        <p className="pt-2 text-2xl font-bold text-center text-white">{props.rating}</p>
      </div>
    </div>
  )
}
