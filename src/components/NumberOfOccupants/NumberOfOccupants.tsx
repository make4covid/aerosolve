import React, { CSSProperties } from 'react'
import head_white from 'assets/old/head_white.png'
import body_white from 'assets/old/body_white.png'
import head_blue from 'assets/old/head_blue.png'
import body_blue from 'assets/old/body_blue.png'

export type NumberOfOccupantsProps = {
  header?: string
  occupant: number
  style?: CSSProperties
  lineBreak?: number
}

export const NumberOfOccupants: React.FC<NumberOfOccupantsProps> = ({
  lineBreak = 5,
  ...props
}) => {
  return (
    <div className="relative w-full h-full bg-gray-300 rounded-xl">
      <div className="text-lg font-semibold text-gray-700">
        {Array(props.occupant)
          .fill(1)
          .map((value, index) => {
            return (
              <span className="inline-block lg:p-2">
                <img className="px-1" src={head_blue} />
                <img src={body_blue} />
              </span>
            )
          })}

        {Array(20)
          .fill(0)
          .map((value, index) => {
            return (
              <span className="inline-block lg:p-2">
                <img className="px-1" src={head_white} />
                <img src={body_white} />
              </span>
            )
          })}
      </div>
    </div>
  )
}
