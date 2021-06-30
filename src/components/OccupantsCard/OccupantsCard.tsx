import React, {CSSProperties, useState} from 'react'
import { Plus } from 'assets/icons/index'
import { Minus } from 'assets/icons/index'

export type OccupantsCardProps = {
  header?: string
  occupant: number
  style?: CSSProperties
  /**
   * Action to set selected options
   */
  setOccupant: (selected: number) => void
  /**
   * Action callback from parent
   */
  callbackToParent: () => void
  /**
   * Integration status
   */
  isIntegration: boolean
}

export const OccupantsCard: React.FC<OccupantsCardProps> = ({
    isIntegration= false,
    ...props
}
) => {

  const [counter,setCounter] = useState(0)
  const updateCounter = () => isIntegration ? props.callbackToParent() : null

  function plus() {
    setCounter(counter+1)
    updateCounter()
  }

  function minus() {
    if(counter>=1) {setCounter(counter-1) }
    updateCounter()
  }

  const Occupant = (value : number) =>{
    return (
        <div className="text-4xl text-blue-500 select-none">
          {value}
        </div>
    )
  }

  return (
    <div
      className="w-64 h-36  bg-white border-3 border-blue-500 rounded-xl lg:ml-16"
      {...props}
    >
      <div className="w-full h-4/6 border-b-2 border-gray-300 ">
          <div className="h-1/3"/>
          <div className="flex flex-row justify-between justify-center">
                <Minus className="mx-2 w-8 h-8 transform transition duration-250 ease-in-out hover:my-1 hover:scale-105 cursor-pointer" onClick={minus} />
                {Occupant(counter)}
                <Plus className="mx-2 w-8 h-8 transform transition duration-250 ease-in-out hover:my-1 hover:scale-105 cursor-pointer" onClick={plus} />
          </div>
      </div>

      <div className="text-center ">
          <p className="text-2xl">Occupants</p>
      </div>
    </div>
  )
}
