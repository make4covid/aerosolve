import React from 'react'
import clsx from 'clsx'
import { SelectionChoiceItem } from './SelectionChoiceItem/SelectionChoiceItem'

export interface SelectionChoiceProps {
  options: string[]
  title: string
  description?: string
  selected: string
  onSelect: (selection: string) => void
}

export const SelectionChoice: React.FC<SelectionChoiceProps> = (props) => {
  const cols = props.options.length + 2
  console.log(props.selected)
  return (
    <div
      style={{ height: 'max-content' }}
      className={`grid grid-cols-${cols} w-full p-2 bg-gray-200 rounded-xl gap-2 items-center`}
    >
      <div className="col-span-2 mx-2">
        <div className="text-base font-bold text-gray-600">{props.title}</div>
        <div className="text-xs text-gray-500">{props.description}</div>
      </div>
      {props.options.map((option) => (
        <SelectionChoiceItem
          selected={option === props.selected}
          value={option}
          onClick={() => {
            props.onSelect(option)
          }}
        ></SelectionChoiceItem>
      ))}
    </div>
  )
}
