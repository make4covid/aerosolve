import React, { CSSProperties } from 'react'
import {PageHeader, PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";
import {NumberOfOccupants} from "../../SafetyGoal/TargetOccupancy/NumberOfOccupants/NumberOfOccupants";
import {HoursCard} from "../../SafetyGoal/TargetOccupancy/HoursCard/HoursCard";

export type TypeOfMaskProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const TypeOfMask: React.FC<TypeOfMaskProps> = (props) => {

    return (
        <div className="container mx-auto px-4 py-8 relative">
                <div className="">
                    <PageHeader title={"09/Type Of Mask"}
                                question={"What is the target occupancy for this space?"} hours={6} people={30}
                                description={""}/>
                </div>
                <div className="">
                    <PageFooter/>
                </div>
        </div>

    )
}
