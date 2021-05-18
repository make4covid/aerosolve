import React, { CSSProperties } from 'react'
import {PageHeader, PageHeaderProps} from "components/PageHeader/PageHeader";

export type VentilationFiltrationProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}


export const VentilationFiltration: React.FC<VentilationFiltrationProps> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
            <h1>Entry to Ventilation_Filtration</h1>
        </div>
)
}
