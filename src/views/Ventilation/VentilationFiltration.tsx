import React from 'react'
import { StepViewProps } from 'data'
import {SelectionChoiceGroup} from "../../components/SelectionChoiceGroup/SelectionChoiceGroup";
import {SelectionOption} from "../../components/SelectionChoice/SelectionChoiceItem/SelectionChoiceItem";
import {SelectionChoiceOption} from "../../components/SelectionChoice/SelectionChoice";

let options1 : SelectionOption[] =[
    {
        button_description:"Poor"
    },
    {
        button_description:"Average"
    },
    {
        button_description:"Good"
    }
]

let options2 : SelectionOption[] =[
    {
        button_description:"None"
    },
    {
        button_description:"Window A/C"
    },
    {
        button_description:"Residential\nHVAC"
    },
    {
        button_description:"Industrial\nHVAC"
    },
    {
        button_description:"HEPA"
    }
]

let options3 : SelectionOption[] =[
    {
        button_description:"Very Dry"
    },
    {
        button_description:"Dry"
    },
    {
        button_description:"Average"
    },
    {
        button_description:"Humid"
    }
]
let options : SelectionChoiceOption[] =[
    {
        options: options1,
        title: "Ventilation",
        description:"Outdoor air supply rate/\nOutdoor ACH",
    },
    {
        options: options2,
        title: "Filtration System",
        description:"The efficiency of filtration system",
    },
    {
        options: options1,
        title: "Recirculation Rate",
        description:"Indoor air exhaust rate/\nIndoor ACH",
    },
    {
        options: options3,
        title: "Average Humidity",
        description:"The average outdoor relative air humidity R/H %",
    }
]

export const VentilationFiltration: React.FC<StepViewProps> = (props) => {
  return (
    <div className="w-full h-3/5">
     <SelectionChoiceGroup options={options} noDescription={false}/>
    </div>
  )
}
