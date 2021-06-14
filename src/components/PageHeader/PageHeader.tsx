import { ProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
import { AppContext } from 'context'
import React, {CSSProperties, useContext} from 'react'

export type PageHeaderProps = {
  header?: string,
  title: string,
  question?: string,
  recommendation?: string,
  hours: number,
  people: number,
  description?: string,
  prompt: string,
  style?: CSSProperties
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { progress } = useContext(AppContext)

  return (
      <div className="grid gap-4 gap-x-2 grid-rows-2 divide-y-2 divide-gray-400">
        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
          <div className="col-span-6">
            <p className="text-3xl font-bold">{props.title}</p>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-base font-medium pl-2">This space is safe for <span className="text-blue-600">{props.people}</span> people for <span className="text-red-600">{props.hours}</span> out of <span className="text-red-600">8</span> targets hours.</p>
              </div>
              <div className="col-span-1">
                <div style={{ borderTop: 0 }}>
                  <ProgressIndicator
                      className="mx-4"
                      value={progress.safeHours}
                      outOf={progress.targetHours}
                      people={progress.targetOccupancy}
                  ></ProgressIndicator>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-11 divide-x-2 divide-gray-400 border-l-2">
          <div className="col-span-6">
            <p className="text-base font-medium text-gray-500 text-2xl px-3">{props.question}</p>
          </div>
          <div className="col-span-5">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  );
}