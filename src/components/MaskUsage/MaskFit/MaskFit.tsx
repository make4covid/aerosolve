import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";


export type MaskFitProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const MaskFit: React.FC<MaskFitProps> = (props) => {

    return (
        <div className="h-screen grid grid-rows-6 divide-gray-400 gap-4">
            <div className="row-span-1">
                <PageHeader title={"10/Mask Fit"}
                            question={"What is the target occupancy for this space?"} hours={6} people={30}
                            description={""}/>
            </div>

            <div className="row-span-4">

            </div>

            <div className="row-span-1">
                <PageFooter/>
            </div>
        </div>
    )
}
