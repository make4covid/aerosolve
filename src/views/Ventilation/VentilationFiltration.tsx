import React, { useCallback, useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionChoice } from 'components/SelectionChoice/SelectionChoice'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from 'context'

export const VentilationFiltration: React.FC<StepViewProps> = (props) => {
  const [{ userInputs }, dispatch] = useContext(AppContext)

  const [ventSelection, setVentSelection] = useState(userInputs.ventilation)
  const [filtSelection, setFiltSelection] = useState(userInputs.filtration)
  const [recircSelection, setRecircSelection] = useState(userInputs.recirculation)
  const [humidSelection, setHumidSelection] = useState(userInputs.humidity)

  useEffect(() => props.onComplete())

  useEffect(() => dispatch({ type: 'setVentilation', payload: { value: ventSelection } }), [
    ventSelection,
    dispatch,
  ])
  useEffect(() => dispatch({ type: 'setFiltration', payload: { value: filtSelection } }), [
    filtSelection,
    dispatch,
  ])
  useEffect(() => dispatch({ type: 'setRecirculation', payload: { value: recircSelection } }), [
    recircSelection,
    dispatch,
  ])
  useEffect(() => dispatch({ type: 'setHumidity', payload: { value: humidSelection } }), [
    humidSelection,
    dispatch,
  ])

  return (
    <div className=" grid w-full grid-cols-1 grid-rows-4 gap-4">
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
    description: 'How quickly indoor air is replaced by outdoor air',
  }

  return <SelectionChoice {...ventOptions} onSelect={setSelected} selected={selected} />
}

const FiltrationOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const filtOptions = {
    options: ['0 - 4 (worst)', '5 - 8', '9 - 12', '13 - 14', '15 - 16 (best)'],
    title: 'Filtration System',
    description: 'MERV rating of filters in use',
  }

  return <SelectionChoice {...filtOptions} onSelect={setSelected} selected={selected} />
}

const RecirculationOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const recircOptions = {
    options: ['None', 'Poor', 'Average', 'Good', 'Excellent'],
    title: 'Recirculation',
    description: 'How quickly indoor air is cycled through the filtration system',
  }

  return <SelectionChoice {...recircOptions} onSelect={setSelected} selected={selected} />
}

const HumidityOptions: React.FC<AirflowOptionsProps> = ({ selected, setSelected }) => {
  const recircOptions = {
    options: ['Very Dry', 'Dry', 'Average', 'Humid', 'Very Humid'],
    title: 'Average Humidity',
    description: 'How dry or humid the space usually feels',
  }

  return <SelectionChoice {...recircOptions} onSelect={setSelected} selected={selected} />
}
