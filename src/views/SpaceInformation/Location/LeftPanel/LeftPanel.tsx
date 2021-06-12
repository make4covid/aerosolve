import React from 'react'

export type LeftPanelProps = {
  header?: string
  rate: string
  description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {
  return (
    <div className="container w-full h-full bg-blue-500 rounded-lg hover:bg-red-700">
      <div className="text-white">The COVID transmissive rate at your current location is at</div>

      <div className="text-xl text-white">{props.rate}</div>

      <div className="text-white">{props.description}</div>
    </div>
  )
}
