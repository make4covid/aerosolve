import React from 'react'
import clsx from 'clsx'
import { SelectionChoiceItem, SelectionOption } from './SelectionChoiceItem/SelectionChoiceItem'

export interface SelectionChoiceOption {
  options: SelectionOption[]
  title: string
  description?: string
  index?: number
  noDescription?: boolean
}
export interface SelectionChoiceProps {
  setSelected?: (selected: number[]) => void
  setSelectedArray: (selectedArray: number[][]) => void
  selectedArray?: number[][]
  onClick?: (e: any) => void
}

/**
 * UI Box for selectable button containing
 */
export const SelectionChoice: React.FC<SelectionChoiceOption & SelectionChoiceProps> = ({
  selectedArray = [],
  ...props
}) => {
  const toggle = (option: number) => {
    // @ts-ignore
    //If collision then turn off, if on the same row then switch
    //If no collision then turn on.
    let tempt = selectedArray
    let collision = false
    for (let i = 0; i < tempt.length; i++) {
      if (tempt[i][0] === props.index) {
        //Double click
        if (tempt[i][1] === option) {
          tempt[i][1] = -1
        } else {
          tempt[i][1] = option
        }
        collision = true
      }
    }
    if (!collision) {
      props.index && (tempt[props.index] = [props.index, option])
    }
    props.setSelectedArray([...tempt])
  }
  return (
    <div className="grid w-full h-full grid-cols-6">
      <div className="col-span-1 pl-4">
        <p
          className={clsx(
            ' font-bold',
            props.noDescription && 'text-3xl',
            !props.noDescription && 'text-xl'
          )}
        >
          {props.title}
        </p>
        {!props.noDescription && <p className="">{props.description}</p>}
      </div>
      <div className="flex col-span-5">
        {props.options.map((option, index) => (
          <div className="inline-grid flex-grow m-2">
            <SelectionChoiceItem
              {...option}
              selected={
                // @ts-ignore
                JSON.stringify(selectedArray[props.index]) === JSON.stringify([props.index, index])
              }
              onClick={() => toggle(index)}
            ></SelectionChoiceItem>
          </div>
        ))}
      </div>
    </div>
  )
}
