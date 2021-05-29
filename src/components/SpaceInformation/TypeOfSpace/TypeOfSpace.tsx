import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {GroupSpace} from "../../SubComponent/SelectionCardGroup/GroupSpace"
import {CardGroupItem} from "../../SubComponent/SelectionCardGroup/SelectionCardGroupItem/ItemSpace";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";
import {InputLocation} from "../../SubComponent/InputLocation/InputLocation";
import {LeftPanel} from "../Location/LeftPanel/LeftPanel";
import {RightPanel} from "../Location/RightPanel/RightPanel";

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

        <div className="h-screen  grid grid-rows-8 divide-gray-400 gap-2 ">
            <div className="row-span-2">
                <PageHeader title={"03/Type of Space"}
                            question={"What is the target occupancy for this space?"} hours={6} people={30}
                            description={""}/>
            </div>


            <div className="row-span-5 relative">
                <GroupSpace items={defaultTypeOfSpaceGroup}/>
            </div>
            <div className="row-span-1 relative">
                <PageFooter/>
            </div>
        </div>

    )
}
