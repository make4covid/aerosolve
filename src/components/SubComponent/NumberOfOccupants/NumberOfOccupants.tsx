import React, {CSSProperties, useState} from 'react'
import {OccupantsCard,OccupantsCardProps} from "../OccupantsCard/OccupantsCard";
import head_white from "../../../icons/head_white.png";
import body_white from "../../../icons/body_white.png"
import head_blue from "../../../icons/head_blue.png"
import body_blue from "../../../icons/body_blue.png"

export const NumberOfOccupants: React.FC<OccupantsCardProps> = (props) => {

    const [nOfOccupant,setNOfOccupant] = useState( Array(30).fill(0))
    const [occupant,setOccupant] = useState(0)


    function plus(value: number){
        let newNOfOccupant = nOfOccupant
        newNOfOccupant[value] = 1
        setOccupant(++value)
        setNOfOccupant(newNOfOccupant)
    }
    function minus(value: number){
        if(value > 0) {
            let newNOfOccupant = nOfOccupant
            newNOfOccupant[value] = 0
            setOccupant(--value)
            setNOfOccupant(newNOfOccupant)
        }
    }

    return (
        <div className="container h-auto w-auto bg-gray-300 rounded-sm">
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                    <p>Number of Occupants</p>
                    { nOfOccupant.map((value,index) =>{
                        if(value == 0){
                            return (
                                <div>
                                    <img src={head_white}/>
                                    <img src={body_white}/>
                                </div>
                            )}
                        else{
                            return (
                                <div>
                                    <img src={head_blue}/>
                                    <img src={body_blue}/>
                                </div>
                            )}
                    })}
                </div>
                <div className="col-span-1"/>

                <div className="col-span-1">
                    <p>Target number of occupants intended for the space to be occupied in a single setting.</p>
                    <OccupantsCard nOfOccupant={occupant} plus={plus} minus={minus}/>
                </div>

            </div>

        </div>
    );
}

