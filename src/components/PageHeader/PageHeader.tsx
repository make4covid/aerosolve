import { ProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
import { AppContext } from 'context'
import { Step, steps } from 'data'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// export type PageHeaderProps = {
//   title: string
//   prompt: string
//   description?: string
// }

export const PageHeader: React.FC<{}> = (props) => {
  const [{ progress }] = useContext(AppContext)
  const location = useLocation()

  const thisStep = (): Step | undefined => {
    return steps.find((step) => {
      return step.route === location.pathname
    })
  }

  const [step, setStep] = useState(thisStep)
  useEffect(() => setStep(thisStep()), [location])

  return (
    <div
      style={{ gridTemplateColumns: '4fr 3fr', gridTemplateRows: 'max-content max-content' }}
      className="grid w-full grid-rows-2 px-12 divide-x-2 divide-y-2 divide-gray-400 gap-y-4"
    >
      <div className="divide-blue-400">
        <h1 className="px-5 text-3xl font-bold ">{step?.title}</h1>
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
        <p className="px-4 my-2 font-medium text-gray-500">{step?.header.prompt}</p>
      </div>
      <div>
        {step?.header.description && (
          <p className="mx-4 my-3 text-sm font-light text-gray-600">{step?.header.description}</p>
        )}
      </div>
    </div>
  )
}
