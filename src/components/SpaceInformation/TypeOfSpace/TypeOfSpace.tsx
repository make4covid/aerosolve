import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {GroupSpace} from "../../SubComponent/SelectionCardGroup/GroupSpace"
import {CardGroupItem} from "../../SubComponent/SelectionCardGroup/SelectionCardGroupItem/ItemSpace";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";

export type TypeOfSpaceProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}


const defaultTypeOfSpaceGroup:CardGroupItem[] = [
    { value: "Living Room",risk:"Low Risk",active: true, route: "test", completed: true},
    { value: "Classroom",  risk:"High Risk", active: false, route: "test", completed: false},
    { value: "Classroom1", risk:"Medium Risk", active: false, route: "test", completed: false},
    { value: "Classroom2",  risk:"High Risk", active: false, route: "test", completed: false},

]

export const TypeOfSpace: React.FC<TypeOfSpaceProps> = (props) => {

    return (
        <div className="relative">
            <GroupSpace items={defaultTypeOfSpaceGroup}/>
            <br/>
            <PageFooter/>
        </div>
    )
}
