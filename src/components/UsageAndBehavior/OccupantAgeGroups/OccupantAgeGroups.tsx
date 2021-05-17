import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";


export type OccupantAgeGroupProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const OccupantAgeGroup: React.FC<OccupantAgeGroupProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to OccupantAgeGroup</h1>
        </div>
    )
}
