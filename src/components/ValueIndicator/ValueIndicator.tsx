import clsx from 'clsx'
import React from 'react'
import { Ref } from 'react'
import { CSSProperties } from 'react'

export type ValueIndicatorProps = {
  value?: number
  units?: string
  style?: CSSProperties
  className?: string
}

export const ValueIndicator: React.FC<ValueIndicatorProps> = ({
  value = 400,
  units = 'sq. feet',
  ...props
}) => {
  return (
    <div style={props.style} className={clsx(props.className, 'w-max select-none')}>
      <div className="px-6 py-1 bg-white border-2 border-blue-500 rounded-lg">
        <span className="text-2xl text-blue-500">{value} </span>
        <span className="text-lg text-gray-600">{units}</span>
      </div>
      <div
        style={{
          borderTopWidth: 12,
          borderRight: '12px solid transparent',
          borderLeft: '12px solid transparent',
        }}
        className="box-border w-0 h-0 mx-auto border-blue-500"
      ></div>
    </div>
  )
}
