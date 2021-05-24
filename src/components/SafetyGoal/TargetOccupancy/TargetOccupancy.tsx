import React, {CSSProperties, useContext} from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {NumberOfOccupants} from "./NumberOfOccupants/NumberOfOccupants";
import {HoursCard} from "./HoursCard/HoursCard";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";


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
            <div className="container mx-auto px-4 py-8 relative">
                <div className="grid grid-rows-5 divide-gray-400 gap-4">
                    <div className="row-span-1">
                        <PageHeader title={"01/Target Occupancy"}
                                    question={"What is the target occupancy for this space?"} hours={6} people={30}
                                    description={""}/>
                    </div>
                    <div className="row-span-2 relative">
                        <NumberOfOccupants nOfOccupant={30}/>
                    </div>
                    <div className="row-span-1 position:relative">
                        <HoursCard hours={20}/>
                    </div>
                    <div className="row-span-1 position:relative">
                        <PageFooter/>
                    </div>
                </div>
            </div>
        )

}
