import React, { CSSProperties } from 'react'
import Plus_Sign from 'assets/old/Plus_Sign.png'
import Minus_Sign from 'assets/old/Minus_Sign.png'
export type OccupantsCardProps = {
  header?: string
  nOfOccupant: number
  style?: CSSProperties
  plus?: (value: number) => any
  minus?: (value: number) => any
}

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {
  return (
    <div className="container relative bg-white border-4 border-blue-500 w-4/4 h-2/4 rounded-xl">
      <div className="z-10 grid grid-rows-3 divide-y">
        <div className="row-span-1"></div>
        <div className="flex justify-between row-span-1 align-middle">
          <span
            className="inline-block text-3xl cursor-pointer"
            onClick={(e) => {
              // @ts-ignore
              props.minus(props.nOfOccupant)
            }}
          >
            <button>
              <img src={Minus_Sign} alt="" />{' '}
            </button>
          </span>

          <span className="inline-block text-5xl font-bold text-center text-blue-500">
            {props.nOfOccupant}
          </span>
          <span
            className="inline-block text-3xl cursor-pointer"
            onClick={(e) => {
              // @ts-ignore
              props.plus(props.nOfOccupant)
            }}
          >
            <button>
              <img src={Plus_Sign} alt="" />
            </button>
          </span>
        </div>
        <div className="row-span-1 border-gray-300 border-t-5">
          <p className="text-2xl font-bold text-center text-gray-500">occupants</p>
        </div>
      </div>
    </div>
  )
}
