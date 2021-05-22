import React, {CSSProperties, useState} from 'react'

export type OccupantsCardProps = {
    header?: string,
    nOfOccupant: number,
    style?: CSSProperties,
    plus?: (value : number) => any,
    minus?: (value :number) => any
}

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {

    return (
        <div className="container mx-auto">
            <div className="grid grid-rows-7 divide-y divide-gray-400 gap-4 w-96 h-36 bg-white-100 rounded-md border-4 border-blue-500">

                  <div className="row-span-6">
                      <div className="text-5xl text-blue-500 text-center font-bold">
                          {props.nOfOccupant}
                      </div>
                      <div className="text-3xl cursor-pointer" onClick={(e) =>{// @ts-ignore
                          props.plus(props.nOfOccupant)}}>
                          +
                      </div>
                      <div className="text-3xl cursor-pointer" onClick={(e)=>{// @ts-ignore
                          props.minus(props.nOfOccupant)}}>
                          -
                      </div>
                  </div>
                  <div className="row-span-1">
                      <p className="text-center">occupants</p>

                  </div>
            </div>
        </div>
    );
}

