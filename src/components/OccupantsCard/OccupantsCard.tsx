import React, { CSSProperties } from 'react'
import {ReactComponent as  Plus_Sign} from 'assets/icons/Plus_Sign.svg'
import {ReactComponent as Minus_Sign} from 'assets/icons/Minus_Sign.svg'
export type OccupantsCardProps = {
  header?: string
  occupant: number
  style?: CSSProperties
  /**
   * Action to set selected options
   */
  setOccupant: (selected: number) => void
}

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {
  function plus() {
    props.setOccupant(props.occupant + 1)
  }

  function minus() {
    props.setOccupant(props.occupant - 1)
  }

  return (
    <div
      className="bg-white border-4 border-blue-500 lg:w-64 lg:h-36 rounded-xl lg:ml-16"
      {...props}
    >
      <div className="z-10 flex flex-col">
        <div className="flex-1">
          <br />
        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-evenly">
            <span className="flex-1 text-3xl cursor-pointer" onClick={minus}>
              <button className="lg:px-6 lg:py-3">
                <Minus_Sign className="w-12 h-8"  />
              </button>
            </span>

            <span className="flex-1 text-5xl font-bold text-center text-blue-500">
              {props.occupant}
            </span>
            <span className="flex-1 text-3xl cursor-pointer" onClick={plus}>
              <button className="lg:px-6 lg:py-3">
                <Plus_Sign className="w-12 h-8" />
              </button>
            </span>
          </div>

          <div className="flex-1 border-gray-300 border-t-5">
            <p className="mt-2 text-2xl font-bold text-center text-gray-500 border-t-2">
              occupants
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
