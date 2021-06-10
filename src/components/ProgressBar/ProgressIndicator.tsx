import clsx from 'clsx'
import { useEffect, useState } from 'react'

export type ProgressIndicatorProps = {
  value: number
  outOf: number
  people?: number
  className?: string
}

type ProgressBarProps = {
  percentComplete: number
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const percentCompleteInverse = (1 / (props.percentComplete / 100)) * 100

  return (
    <div className={clsx('mx-auto h-3 w-4/5 shadow-inner2 bg-gray-300 rounded-full')}>
      <div
        style={{
          width: `${props.percentComplete}%`,
          backgroundImage: `linear-gradient(to right, rgba(255,0,93,1) 0%, rgba(48,0,185,1) ${percentCompleteInverse}%)`,
        }}
        className={clsx(
          'h-full rounded-full  from-pink-600 to-indigo-600 flex flex-row items-center justify-end'
        )}
      >
        <div style={{ marginRight: '0.15rem' }} className="w-2 h-2 bg-white rounded-full "></div>
      </div>
    </div>
  )
}
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ children, ...props }) => {
  const [percentComplete, setPercentComplete] = useState(0)
  useEffect(() => {
    setPercentComplete(Math.min(props.value / props.outOf, 1) * 100)
  })
  return (
    <div
      style={{ maxWidth: '25ch' }}
      className={clsx('min-w-max text-center font-semibold text-gray-600', props.className)}
    >
      <div className="mb-3">
        This space is safe for <span className="text-blue-500">{props.people}</span>
        <br /> people for{' '}
        <span
          className={clsx(
            props.value < props.outOf && 'text-red-500',
            props.value >= props.outOf && 'text-blue-500'
          )}
        >
          {props.value} {props.value < props.outOf && `of ${props.outOf}`}
        </span>{' '}
        {props.value < props.outOf && 'target '}
        hours.
      </div>
      <ProgressBar percentComplete={percentComplete} />
    </div>
  )
}
