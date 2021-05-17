import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";

export type LocationProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const Location: React.FC<LocationProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to  Location</h1>
        </div>
    )
}
