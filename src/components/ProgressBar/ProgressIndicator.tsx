import clsx from 'clsx'
import { ReactFragment } from 'react'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

const Highlight = styled.span(({ negative = false }: { negative?: boolean }) => [
  tw`text-blue-500`,
  negative && tw`text-red-500`,
])

export type ProgressIndicatorProps = {
  value: number
  outOf: number
  people: number
  className?: string
}

type ProgressBarProps = {
  percentComplete: number
}

type ValueBoxProps = {
  value: number
  label: string
  color: 'gray' | 'red' | 'blue'
  className?: string
}

export const ValueBox: React.FC<ValueBoxProps> = (props) => (
  <div
    className={clsx(
      'border-2 rounded-md flex flex-col align-middle p-1.5 h-full justify-between text-center font-semibold w-16',
      `border-${props.color}-500 text-${props.color}-500`,
      props.className
    )}
  >
    <div className="text-2xl">{props.value}</div>
    <div className="text-sm text-center">{props.label}</div>
  </div>
)

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const percentCompleteInverse = (1 / (props.percentComplete / 100)) * 100

  return (
    <div className={clsx('h-2.5 shadow-inner2 bg-gray-300 rounded-full')}>
      <div
        style={{
          width: `${props.percentComplete}%`,
          backgroundImage: `linear-gradient(to right, rgba(255,0,93,1) 0%, rgba(48,0,185,1) ${percentCompleteInverse}%)`,
        }}
        className={clsx(
          'h-full rounded-full  from-pink-600 to-indigo-600 flex flex-row items-center justify-end shadow-inner2'
        )}
      >
        <div
          style={{ marginRight: '0.15rem' }}
          className="w-1.5 h-1.5 bg-white rounded-full "
        ></div>
      </div>
    </div>
  )
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ children, ...props }) => {
  const [percentComplete, setPercentComplete] = useState(0)
  const [safe, setSafe] = useState(true)
  useEffect(() => {
    setPercentComplete(Math.min(props.value / props.outOf, 1) * 100)
    setSafe(props.value >= props.outOf)
  }, [props.value, props.outOf])

  const unsafeFragment: ReactFragment = (
    <span>
      out of <Highlight negative={!safe}>{props.outOf}</Highlight> target
    </span>
  )

  return (
    <div className="flex flex-row items-center">
      <div
        style={{ maxWidth: '18ch' }}
        className={clsx(
          'text-xs font-semibold text-gray-600 flex flex-col h-16 justify-between mr-2',
          props.className
        )}
      >
        <div>
          This space is safe for <Highlight>{props.people} </Highlight>
          people for <Highlight negative={!safe}>{props.value}</Highlight>{' '}
          {props.value <= props.outOf && unsafeFragment} hours.
        </div>
        <ProgressBar percentComplete={percentComplete} />
      </div>
      <ValueBox
        value={props.people}
        label="people"
        color={safe ? 'blue' : 'gray'}
        className="ml-2"
      />
      <ValueBox value={props.value} label="hours" color={safe ? 'blue' : 'red'} className="ml-2" />
    </div>
  )
}
