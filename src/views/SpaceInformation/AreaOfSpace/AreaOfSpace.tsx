import React, { CSSProperties } from 'react'
import {PageHeader} from "components/PageHeader/PageHeader";

export type AreaOfSpaceProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const AreaOfSpace: React.FC<AreaOfSpaceProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to AreOfSpace</h1>
        </div>
    )
}
