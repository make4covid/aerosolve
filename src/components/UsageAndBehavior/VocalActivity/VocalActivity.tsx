import React, { CSSProperties } from 'react'
import {PageHeader, PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";


export type VocalActivityProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}


export const VocalActivity: React.FC<VocalActivityProps> = (props) => {

    return (
        <div className="relative">

            <h1>Entry to VocalActivity</h1>
            <PageFooter/>
        </div>
    )
}
