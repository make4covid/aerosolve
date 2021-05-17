import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";


export type CeilingHeightProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const CeilingHeight: React.FC<CeilingHeightProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to CeilingHeight</h1>
        </div>
    )
}
