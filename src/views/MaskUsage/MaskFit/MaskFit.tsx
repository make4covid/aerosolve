import React, { CSSProperties } from 'react'
import {PageHeader} from "components/PageHeader/PageHeader";


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
        <div>
            <PageHeader {...props}/>
            <h1>Entry to MaskFit</h1>
        </div>
    )
}
