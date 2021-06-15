import React from 'react'
import clsx from 'clsx'

export interface SelectionOption {
  button_description: string
}
export interface SelectionChoiceProps {
  selected?: boolean
  onClick?: (e: any) => void
  className?: string
}

/**
 * UI Box for selectable button containing
 */
export const SelectionChoiceItem: React.FC<SelectionChoiceProps & SelectionOption> = ({
  selected = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'rounded-2xl h-14  p-4 cursor-pointer transition duration-200',
        selected && 'bg-blue-500 shadow-inner',
        !selected && 'bg-white hover:shadow-lg'
      )}
      {...props}
    >
      <div
        className={clsx(
          'm-auto justify-center text-xl font-medium',
          selected && 'text-white',
          !selected && 'text-gray-500'
        )}
      >
        {props.button_description}
      </div>
    </button>
  )
}
