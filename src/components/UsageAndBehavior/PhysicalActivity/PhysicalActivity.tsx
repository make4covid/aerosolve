import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";


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
        <div>
            <PageHeader {...props}/>
            <h1>Entry to PhysicalActivity</h1>
        </div>
    )
}
