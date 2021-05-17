import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";


export type TypeOfSpaceProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const TypeOfSpace: React.FC<TypeOfSpaceProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to TypeOfSpace</h1>
        </div>
    )
}
