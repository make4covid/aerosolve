import React, { CSSProperties } from 'react'
import { ReactComponent as Head_White} from 'assets/icons/head_white.svg'
import {ReactComponent as Head_Blue} from 'assets/icons/head_blue.svg'
import {ReactComponent as Body_Blue} from 'assets/icons/body_blue.svg'
import {ReactComponent as Body_White}  from 'assets/icons/body_white.svg'

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
              <span className="inline-block lg:p-1">
                <Head_Blue className="w-5 h-3"/>
                <Body_Blue/>
              </span>
            )
          })}

        {Array(20)
          .fill(0)
          .map((value, index) => {
            return (
              <span className="inline-block lg:p-1">
                <Head_White className="w-5 h-3"/>
                <Body_White/>
              </span>
            )
          })}
      </div>
    </div>
  )
}
