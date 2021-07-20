import React from 'react'
import { SelectionChoiceItem } from './SelectionChoiceItem/SelectionChoiceItem'

export interface SelectionChoiceProps {
  options: string[]
  title: string
  description?: string
  selected: number
  onSelect: (selection: number) => void
}

export const SelectionChoice: React.FC<SelectionChoiceProps> = (props) => {
  const cols = props.options.length + 2
  return (
    <div
      style={{ height: 'max-content' }}
      className={`grid grid-cols-${cols} w-full p-2 bg-gray-200 rounded-xl gap-2 items-center min-h-full`}
    >
      <div className="col-span-2 mx-2">
        <div className="text-base font-bold text-gray-600">{props.title}</div>
        <div className="text-xs text-gray-500">{props.description}</div>
      </div>
      {props.options.map((option, index) => (
        <SelectionChoiceItem
          selected={index === props.selected}
          value={option}
          onClick={() => {
            props.onSelect(index)
          }}
        ></SelectionChoiceItem>
      ))}
    </div>
  )
}
