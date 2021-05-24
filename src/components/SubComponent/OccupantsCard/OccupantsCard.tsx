import React, {CSSProperties, useState} from 'react'
import Plus_Sign from "../../../icons/Plus_Sign.png"
import Minus_Sign from "../../../icons/Minus_Sign.png"
export type OccupantsCardProps = {
    header?: string,
    nOfOccupant: number,
    style?: CSSProperties,
    plus?: (value : number) => any,
    minus?: (value :number) => any
}

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {

    return (
        <div className="container w-64 h-48 border-blue-500 bg-white-300 border-4 rounded-xl">
              <div className="flex justify-between">
                  <span className="inline-block text-3xl cursor-pointer" onClick={(e)=>{// @ts-ignore
                      props.minus(props.nOfOccupant)}}>
                       <button><img src={Minus_Sign}/> </button>
                  </span>

                  <span className="inline-block text-5xl text-blue-500 text-center font-bold">
                      {props.nOfOccupant}
                  </span>
                  <span className="inline-block text-3xl cursor-pointer" onClick={(e) =>{// @ts-ignore
                      props.plus(props.nOfOccupant)}}>
                      <button><img src={Plus_Sign}/></button>
                  </span>
              </div>
               <p className="text-center text-2xl text-gray-500 font-bold">occupants</p>
        </div>
    );
}

