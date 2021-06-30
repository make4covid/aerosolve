import React, { useContext } from 'react'

import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'
import { StepViewProps } from 'data'
import { PlainCard } from '../../../components/PlainCard/PlainCard'
import { Slider } from 'components/Slider/Slider'
import tw from 'twin.macro'
import { AppContext } from 'context'

const Block = tw.div`w-full bg-gray-200 rounded-xl px-10 py-6`
const BlockHeader = tw.div`font-semibold text-gray-600 mb-2`

export const AreaOfSpace: React.FC<StepViewProps> = (props) => {
  const [context, dispatch] = useContext(AppContext)

  const {
    userInputs: { ceilingHeight, roomArea },
  } = context

  const setRoomArea = (value: number) => dispatch({ type: 'setRoomArea', payload: { value } })
  const setCeilingHeight = (value: number) =>
    dispatch({ type: 'setCeilingHeight', payload: { value } })

  return (
    <div className="flex flex-col justify-center w-full min-h-full gap-6 ">
      <Block>
        <BlockHeader>
          Approximate area of the space (ft<sup>2</sup>)
        </BlockHeader>
        <Slider
          interval={2000}
          min={0}
          max={10000}
          labelValues={false}
          onChange={setRoomArea}
          unit="foot"
          unitPrefix="sq."
          value={roomArea}
        />
      </Block>
      <Block>
        <BlockHeader>Approximate average ceiling height (ft) </BlockHeader>

        <Slider
          interval={4}
          min={6}
          max={26}
          labelValues={false}
          onChange={setCeilingHeight}
          unit="foot"
          value={ceilingHeight}
        />
      </Block>
      {/* <PlainCard title={'Selection'} description={''} selectionSquareFt={true} /> */}
    </div>
  )
}
