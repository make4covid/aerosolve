import clsx from 'clsx'

export type RiskChipProps = {
  risk?: 'Low' | 'Medium' | 'High'
  label?: string
  className?: string
  size?: 'lg'
}

export const RiskChip: React.FC<RiskChipProps> = (props) => {
  const text = props.label ? props.label : `${props.risk} Risk`
  return (
    <div
      className={clsx(
        !props.risk && 'border-gray-500 text-gray-500',
        props.risk === 'Low' && 'border-blue-500 text-blue-500',
        props.risk === 'Medium' && 'border-purple-500 text-purple-500',
        props.risk === 'High' && 'border-red-500 text-red-500',
        'px-6 py-0.5 font-semibold border-2 rounded-full flex-grow-0 min-w-max max-w-min text-sm',
        props.className
      )}
    >
      {text}
    </div>
  )
}
