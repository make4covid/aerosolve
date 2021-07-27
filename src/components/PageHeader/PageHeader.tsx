import { ProgressIndicator, ProgressIndicatorProps } from 'components/ProgressBar/ProgressIndicator'
import { AppContext } from 'context'
import { Step, steps } from 'data'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export type PageHeaderProps = {
  title: string
  prompt: string
  description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const [{ progress }] = useContext(AppContext)

  return (
    <div
      style={{ gridTemplateColumns: '4fr 3fr', gridTemplateRows: 'max-content max-content' }}
      className="gap-y-4 grid w-full grid-rows-2 px-12 divide-x-2 divide-y-2 divide-gray-400"
    >
      <div className="divide-blue-400">
        <h1 className=" px-5 text-3xl font-bold">{props.title}</h1>
      </div>
      <div style={{ borderLeft: 0, borderTop: 0 }}>
        <ProgressIndicator
          className="mx-4"
          {...{
            value: progress.safeHours,
            outOf: progress.targetHours,
            people: progress.targetOccupancy,
          }}
        ></ProgressIndicator>
      </div>
      <div>
        <p className="px-4 my-2 font-medium text-gray-500">{props.prompt}</p>
      </div>
      <div style={{ borderLeft: !props.description ? 0 : '' }}>
        {props.description && (
          <p className="mx-4 my-3 text-sm font-light text-gray-600">{props.description}</p>
        )}
      </div>
    </div>
  )
}

export const HeaderWrapper: React.FC<object> = () => {
  const location = useLocation()

  const thisStepIndex = (): number => {
    return steps.findIndex((step) => {
      return step.route === location.pathname
    })
  }

  const [stepIndex, setStepIndex] = useState(thisStepIndex)
  useEffect(() => setStepIndex(thisStepIndex()), [location])

  return (
    <>
      {location.pathname === '/information' ? (
        <></>
      ) : location.pathname === '/recommendations' || !steps[stepIndex] ? (
        <PageHeader
          title="Safety Recommendations"
          prompt="Based on the information you provided, here are some recommendations for how to make your space safer!"
        />
      ) : (
        <PageHeader
          title={`${stepIndex + 1}. ${steps[stepIndex].title}`}
          prompt={steps[stepIndex].header.prompt}
          description={steps[stepIndex].header.description}
        />
      )}
    </>
  )
}
