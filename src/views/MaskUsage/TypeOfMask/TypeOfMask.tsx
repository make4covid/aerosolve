import React, { CSSProperties } from 'react'
import {PageHeader, PageHeaderProps} from "components/PageHeader/PageHeader"

export type TypeOfMaskProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const TypeOfMask: React.FC<TypeOfMaskProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to TypeOfMask</h1>
        </div>
    )
}
