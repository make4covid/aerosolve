import React, { CSSProperties } from 'react'
import {PageHeader, PageHeaderProps} from "../SubComponent/PageHeader/PageHeader";
import {PageFooter} from "../SubComponent/PageFooter/PageFooter";

export type Ventilation_Filtration_Props={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}


export const Ventilation_Filtration: React.FC<Ventilation_Filtration_Props> = (props) => {

    return (
        <div className="relative">
            <h1>Entry to Ventilation_Filtration</h1>
            <PageFooter/>
        </div>
)
}
