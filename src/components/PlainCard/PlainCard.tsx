import React from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import {SelectionSlider} from "../SelectionSlider/SelectionSlider";
import {OccupantsCard, OccupantsCardProps} from "../OccupantsCard/OccupantsCard";
import {NumberOfOccupants} from "../NumberOfOccupants/NumberOfOccupants";

export interface CardOptions {
    occupants?: boolean;
    hours?: boolean;
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

    return (
        <div className="w-full h-full rounded-lg px-8 lg:ml-4">
            {props.occupants &&

            <div>
                <div className="flex flex-cols">
                    <p className="flex-1 font-medium text-2xl m-6">{props.title}</p>
                    <p className={"flex-1"}/>
                    <text className={"flex-1 m-6"}>{props.description}</text>
                </div>

                <div className="flex flex-cols lg:ml-12">
                    <div className="flex-1 lg:-mt-8"><NumberOfOccupants nOfOccupant={30} lineBreak={10}/></div>
                    <div className="flex-1"></div>
                    <div className="flex-1"><OccupantsCard nOfOccupant={30}/></div>
                </div>
            </div>


            }
            {props.hours &&
                <div>
                    <div className="flex flex-row">
                        <p className="flex-1 font-medium text-2xl mx-4">{props.title}</p>
                        <p className={"flex-1"}/>
                        <p className={"flex-1 mx-4"}>{props.description}</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <SelectionSlider value={20} min={"0"} max={"24"} unit={"hours"} arrayValue={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}/>
                </div>

            }


        </div>

    );
};
