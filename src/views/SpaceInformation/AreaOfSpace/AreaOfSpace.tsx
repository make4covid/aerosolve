import React, { useContext } from 'react'

import { StepViewProps } from 'data'
import { Slider } from 'components/Slider/Slider'
import tw from 'twin.macro'
import { AppContext } from 'context'
import { useEffect } from 'react'

const Block = tw.div`rounded-xl w-full px-10 py-6 bg-gray-200`
const BlockHeader = tw.div`mb-2 font-semibold text-gray-600`

export const AreaOfSpace: React.FC<StepViewProps> = (props) => {
  const [context, dispatch] = useContext(AppContext)

  useEffect(() => {
    props.onComplete()
  }, [])

  const {
    userInputs: { ceilingHeight, roomArea },
  } = context

  const setRoomArea = (value: number) => dispatch({ type: 'setRoomArea', payload: { value } })
  const setCeilingHeight = (value: number) =>
    dispatch({ type: 'setCeilingHeight', payload: { value } })

  return (
    <div className=" flex flex-col w-full min-h-full gap-6">
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
    </div>
  )
}
