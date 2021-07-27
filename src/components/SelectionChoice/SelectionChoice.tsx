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
  const cols = props.options.length
  return (
    <div
      style={{ height: 'max-content', minHeight: '4.5rem' }}
      className={`rounded-xl grid items-center w-full min-h-full grid-cols-7 gap-2 p-2 bg-gray-200`}
    >
      <div className="col-span-2 mx-2">
        <div className="text-base font-bold text-gray-600">{props.title}</div>
        <div className="text-xs text-gray-500">{props.description}</div>
      </div>
      <div className={`grid h-full grid-cols-5 col-span-5 gap-2`}>
        {props.options.map((option, index) => (
          <SelectionChoiceItem
            key={option}
            selected={index === props.selected}
            value={option}
            onClick={() => {
              props.onSelect(index)
            }}
          ></SelectionChoiceItem>
        ))}
      </div>
    </div>
  )
}
