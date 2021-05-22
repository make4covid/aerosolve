import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {CardGroupItem} from "../../SubComponent/SelectionCardGroup/SelectionCardGroupItem/ItemActivity";
import {SelectionSliderHeight} from "../../SubComponent/SelectionSlider/SelectionHeight/SelectionSliderHeight";
import {OccupantsCard} from "../../SubComponent/OccupantsCard/OccupantsCard";
import {NumberOfOccupantCard} from "../../SubComponent/NumberOfOccupants/NumberOfOccupants.stories";
import {NumberOfOccupants} from "../../SubComponent/NumberOfOccupants/NumberOfOccupants";

export type TargetOccupancyItem = {
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const TargetOccupancy: React.FC<TargetOccupancyItem> = (props) => {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-rows-6 divide-gray-400 gap-4">
                <div className="row-span-1">
                    <div className="grid grid-rows-2 divide-y-2 divide-gray-400 gap-4">
                        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
                            <div className="col-span-6">
                                <p className="text-3xl font-bold">01/Target Occupancy</p>
                            </div>
                            <div className="col-span-5">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <p className="text-base font-medium pl-2">This space is safe for 30 people for 6 out of 8 targets hours.</p>
                                    </div>
                                    <div className="col-span-1">
                                        <SelectionSliderHeight value={3}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
                            <div className="col-span-6">
                                <p className="text-base font-medium">What is the target occupancy for this space?</p>
                            </div>
                            <div className="col-span-5">
                                <p>Empty...</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row-span-2 position:relative z-2">
                    <NumberOfOccupants nOfOccupant={30}/>
                </div>
                <div className="row-span-2">
                   <SelectionSliderHeight value={12}/>
                </div>

            </div>
        </div>
    )
}
