import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";


export type PhysicalActivityProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const PhysicalActivity: React.FC<PhysicalActivityProps> = (props) => {

    return (
        <div className="relative">
            <h1>Entry to PhysicalActivity</h1>
            <PageFooter/>
        </div>
    )
}
