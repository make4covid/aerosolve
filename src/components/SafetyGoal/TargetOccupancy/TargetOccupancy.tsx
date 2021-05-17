import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {CardGroupItem} from "../../SubComponent/SelectionCardGroup/SelectionCardGroupItem/ItemActivity";

export type TargetOccupancyItem = {
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const TargetOccupancy: React.FC<TargetOccupancyItem> = (props) => {

    return (
        <div>
            <PageHeader {...props}/>
          <h1>Entry to Occupancy</h1>
        </div>
    )
}
