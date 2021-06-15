import React from 'react'
import Cube from 'assets/old/AreaOfSpace_Cube.png'
export type LeftPanelProps = {
  header?: string
  size: string
  description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {
  return (
    <div className="w-full h-full bg-gray-100 rounded-2xl">
      <p className="p-4 text-3xl text-bold">Room Size</p>
      <p className="p-4">
        This space is about the size of{' '}
        <span className="font-bold text-blue-500">{props.size}</span>.
      </p>

      <p className="p-4">
        Following the "6 foot" social distancing rule, there should be{'\n'}
        <span className="font-bold text-blue-500">{props.description}</span> in the space.
      </p>

      <img className="relative float-right -left-4" src={Cube} />
    </div>
  )
}
