import React from 'react'
import { StepViewProps } from 'data'
import {SelectionChoiceGroup} from "../../../components/SelectionChoiceGroup/SelectionChoiceGroup";
import {SelectionChoiceOption} from "../../../components/SelectionChoice/SelectionChoice";
import {SelectionOption} from "../../../components/SelectionChoice/SelectionChoiceItem/SelectionChoiceItem";

let option : SelectionOption[] =[
    {
        button_description:"Mostly No"
    },
    {
        button_description:"Average"
    },
    {
        button_description:"Mostly Yes"
    }
]

let options : SelectionChoiceOption[] =[
    {
        options: option,
        title: "Occupants are wearing Masks\nthat completely covering their\nnose and mouth",
    },
    {
        options: option,
        title: "Occupants are wearing masks with\nmetal nosebands",
    },
    {
        options: option,
        title: "Occupants are wearing\ndouble masks",
    }
]

export const MaskFit: React.FC<StepViewProps> = (props) => {
  return (
      <div className="w-full h-3/5">
          <SelectionChoiceGroup options={options} noDescription={true}/>
      </div>
  )
}
