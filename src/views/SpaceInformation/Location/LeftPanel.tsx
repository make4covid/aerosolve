import React from 'react'

export type LeftPanelProps = {
  header?: string
  title: string
  rate: string
  description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {
  return (
    <div className="flex flex-row flex-col content-center w-full h-full bg-blue-500 rounded-2xl hover:bg-red-700">
      <p className="flex-1 text-2xl font-semibold text-white lg:mx-16 lg:my-12 w-72">
        {props.title}
      </p>

      <p className="flex-1 text-4xl font-bold text-white lg:mx-16">{props.rate}</p>

      <p className="flex-1 font-semibold text-white lg:mx-16">{props.description}</p>
    </div>
  )
}
