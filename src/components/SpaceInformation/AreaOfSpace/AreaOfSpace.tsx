import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";

export type AreaOfSpaceProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const AreOfSpace: React.FC<AreaOfSpaceProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to AreOfSpace</h1>
        </div>
    )
}
