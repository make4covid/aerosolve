import React from 'react'
import clsx from 'clsx'

export interface SelectionChoiceItemProps {
  value: string
  selected?: boolean
  onClick?: (e: any) => void
  className?: string
}

export const SelectionChoiceItem: React.FC<SelectionChoiceItemProps> = ({
  selected = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'rounded-lg w-full h-full cursor-pointer transition-all duration-300 outline-none focus:outline-none px-1.5 py-1',
        selected && 'bg-blue-500 shadow-inner',
        !selected && 'bg-white hover:shadow-lg',
        props.className
      )}
      onClick={props.onClick}
    >
      <div
        className={clsx(
          'justify-center text-xs md:text-sm',
          selected && 'text-white',
          !selected && 'text-gray-500'
        )}
      >
        {props.value}
      </div>
    </button>
  )
}
