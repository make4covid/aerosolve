import React, {useState} from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import {SelectionSlider} from "../SelectionSlider/SelectionSlider";
import {OccupantsCard, OccupantsCardProps} from "../OccupantsCard/OccupantsCard";
import {NumberOfOccupants} from "../NumberOfOccupants/NumberOfOccupants";

export interface CardOptions {
    occupants?: boolean;
    selectionHours?: boolean;
    selectionSquareFt?: boolean;
    selectionHeight?: boolean;
}
export interface CardProps {
    title: string,
    description?: string
}
/**
 * UI Box for selectable blocks containing information and images
 */
export const PlainCard: React.FC<CardProps &CardOptions> = ({

                                                                ...props}) => {

    const [occupant,setOccupant] = useState(5)

    return (
        <div className="w-full h-full rounded-lg">
            {props.occupants &&

            <div className="flex flex-row">
                <div className="flex-1">
                        <div className="flex flex-col">
                            <p className="flex-1 font-medium text-2xl m-6">{props.title}</p>
                            <div className="flex-1"/>
                            <div className="flex-1 p-4"><NumberOfOccupants occupant={occupant} lineBreak={10}/></div>
                        </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col">
                            <text className="flex-1 m-6">{props.description}</text>
                            <div className="flex-1"/>
                            <div className="flex-1 p-4">
                                <OccupantsCard occupant={occupant} setOccupant={setOccupant}/>
                            </div>
                    </div>
                </div>
            </div>

            }
            {props.selectionHours &&
            <div  className="w-full h-full flex flex-col p-4">
                <div className="flex-1">
                    <div className="flex flex-row">
                        <p className="flex-1 font-medium text-2xl">{props.title}</p>
                        <p className="flex-1"/>
                        <p className="flex-1">{props.description}</p>
                    </div>
                </div>
                <div className="flex-1"/>
                <div className="w-full h-full flex-1">
                    <SelectionSlider value={12} min={"0"} max={"24"} unit={"hours"} arrayValue={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}/>
                </div>
            </div>

            }

            {
                props.selectionSquareFt &&
                <div  className="w-full h-full flex flex-col p-4">
                    <div className="flex-1">
                        <div className="flex flex-row">
                            <p className="flex-1 font-medium text-2xl">{props.title}</p>
                            <p className="flex-1"/>
                            <p className="flex-1">{props.description}</p>
                        </div>
                    </div>
                    <div className="flex-1"/>
                    <div className="w-full h-full flex-1">
                        <SelectionSlider value={600} min={"0"} max={">10000"} unit={"sq. feet"} arrayValue={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}/>
                    </div>
                </div>

            }

            {
                props.selectionHeight &&
                <div  className="w-full h-full flex flex-col p-4">
                    <div className="flex-1">
                        <div className="flex flex-row">
                            <p className="flex-1 font-medium text-2xl">{props.title}</p>
                            <p className="flex-1"/>
                            <p className="flex-1">{props.description}</p>
                        </div>
                    </div>
                    <div className="flex-1"/>
                    <div className="w-full h-full flex-1">
                        <SelectionSlider value={600} min={"0"} max={">10000"} unit={"sq. feet"} arrayValue={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}/>
                    </div>
                </div>

            }

        </div>

    );
};