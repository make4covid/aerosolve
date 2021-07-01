import React, { useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionChoice } from 'components/SelectionChoice/SelectionChoice'
import { useReducer } from 'react'

export const VentilationFiltration: React.FC<StepViewProps> = (props) => {
  // Set up a reducer for this section, debounce the result, and store it in app context

  const [ventSelection, setVentSelection] = useState(0)
  const [filtSelection, setFiltSelection] = useState(0)
  const [recircSelection, setRecircSelection] = useState(0)
  const [humidSelection, setHumidSelection] = useState(0)

  return (
    <div className="grid w-full grid-cols-1 grid-rows-4 gap-4 mt-4">
      <VentilationOptions selected={ventSelection} setSelected={setVentSelection} />
      <FiltrationOptions selected={filtSelection} setSelected={setFiltSelection} />
      <RecirculationOptions selected={recircSelection} setSelected={setRecircSelection} />
      <HumidityOptions selected={humidSelection} setSelected={setHumidSelection} />
    </div>
  )
}

type AirflowOptionsProps = {
  selected: number
  setSelected: (select: number) => void
}

const VentilationOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const ventOptions = {
    options: ['None', 'Poor', 'Average', 'Good', 'Excellent'],
    title: 'Ventilation',
    description: 'Outdoor air supply rate',
  }

  return <SelectionChoice {...ventOptions} onSelect={setSelected} selected={selected} />
}

const FiltrationOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const filtOptions = {
    options: ['None', 'Window AC', 'Residential HVAC', 'Industrial HVAC', 'HEPA'],
    title: 'Filtration System',
    description: 'Type of filtration provided',
  }

  return <SelectionChoice {...filtOptions} onSelect={setSelected} selected={selected} />
}

const RecirculationOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const recircOptions = {
    options: ['None', 'Low', 'Average', 'High', 'Very High'],
    title: 'Recirculation',
    description: 'Indoor air recirculation (ACH)',
  }

  return <SelectionChoice {...recircOptions} onSelect={setSelected} selected={selected} />
}

const HumidityOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const recircOptions = {
    options: ['Very Dry', 'Dry', 'Average', 'Humid', 'Very Humid'],
    title: 'Average Humidity',
    description: 'Indoor humidity in the space',
  }

  return <SelectionChoice {...recircOptions} onSelect={setSelected} selected={selected} />
}
