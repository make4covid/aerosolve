import { ProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
import { AppContext } from 'context'
import React, { useContext } from 'react'
import { useEffect } from 'react'

export type PageHeaderProps = {
  title: string
  prompt: string
  description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const [{ progress }] = useContext(AppContext)

  return (
    <div
      style={{ gridTemplateColumns: '3fr 2fr', gridTemplateRows: 'max-content max-content' }}
      className="grid w-full grid-rows-2 divide-x-2 divide-y-2 divide-gray-400 gap-y-4"
    >
      <div className="divide-blue-400">
        <h1 className="px-5 text-3xl font-bold ">{props.title}</h1>
      </div>
      <div style={{ borderLeft: 0, borderTop: 0 }}>
        <ProgressIndicator
          className="mx-4"
          value={progress.safeHours}
          outOf={progress.targetHours}
          people={progress.targetOccupancy}
        ></ProgressIndicator>
      </div>
      <div>
        <p className="px-4 my-2 text-lg font-medium text-gray-500">{props.prompt}</p>
      </div>
      <div>
        {props.description && (
          <p className="mx-4 my-3 text-sm text-gray-600">{props.description}</p>
        )}
      </div>
    </div>
  )
}
