import { ProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
import React, { CSSProperties } from 'react'
export type PageHeaderProps = {
  header?: string
  title: string
  question: string
  recommendation?: string
  description: string
  style?: CSSProperties
  safeHours: number
  targetHours: number
  targetOccupancy: number
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div
      style={{ gridTemplateColumns: '3fr 2fr', gridTemplateRows: 'max-content max-content' }}
      className="grid w-full grid-rows-2 divide-x-2 divide-y-2 divide-gray-400 gap-y-4"
    >
      <div>
        <h1 className="px-5 text-3xl font-bold">{props.title}</h1>
      </div>
      <div style={{ borderTop: 0 }} className="border-t-0 border-l-2">
        <ProgressIndicator
          className="mx-4"
          value={props.safeHours}
          outOf={props.targetHours}
          people={props.targetOccupancy}
        ></ProgressIndicator>
      </div>
      <div>
        <p className="px-4 my-2 text-lg font-medium text-gray-500">{props.question}</p>
      </div>
      <div className="border-l-2 border-gray-500">
        <p className="mx-4 my-3 text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  )
}
