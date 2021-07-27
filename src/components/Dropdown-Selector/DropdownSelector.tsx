import React, { useState } from 'react'
import clsx from 'clsx'
import { ChevronUpDown } from 'assets/svg'
import { useRef } from 'react'

export interface DropdownSelectorProps {
  options: string[]
  placeholder: string
  onSelect?: (value: any) => void
  isIntegration: boolean
  className?: string
  onClick?: () => void
  value: string
  autofocus?: boolean
}

export const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  autofocus = false,
  options = [],
  ...props
}) => {
  const [focus, setFocus] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <div
      className={clsx(
        'flex flex-row-reverse w-full border-2 items-center border-gray-300 rounded-lg transition-colors duration-100 ',
        options.length === 0 ? 'bg-gray-100 cursor-default' : 'bg-white',
        focus && 'border-blue-500'
      )}
    >
      <ChevronUpDown className="mr-1.5 justify-self-end w-5 h-5 -ml-8 text-gray-600 fill-current" />
      <select
        autoFocus
        disabled={options.length === 0}
        ref={selectRef}
        name={props.placeholder}
        id={`${props.placeholder}-select`}
        className={clsx(
          'inline-block w-full p-1 m-0 text-left text-gray-500 bg-transparent border-0 outline-none appearance-none justify-self-start',
          options.length === 0 ? 'cursor-default' : 'cursor-pointer'
        )}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={props.value}
        onChange={(e) => {
          props.onSelect && props.onSelect(e.target.value)
        }}
      >
        <option value={props.placeholder} disabled hidden>
          {props.placeholder}
        </option>
        {options.sort().map((option) => (
          <option key={option} value={option} className="bg-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
