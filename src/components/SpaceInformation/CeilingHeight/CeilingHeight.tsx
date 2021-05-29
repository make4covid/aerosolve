import React, { CSSProperties } from 'react'
import {PageHeader,PageHeaderProps} from "../../SubComponent/PageHeader/PageHeader";
import {SelectionSliderHeight} from "../../SubComponent/SelectionSlider/SelectionHeight/SelectionSliderHeight";
import {LeftPanel} from "../AreaOfSpace/LeftPanel/LeftPanel";
import {RightPanel} from "../AreaOfSpace/RightPanel/RightPanel";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";


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
        <div className="h-screen gap-4 grid grid-rows-11 divide-gray-400">
                <div className="row-span-2">
                    <PageHeader title={"5/Ceiling Height"} question={"bla"} hours={30} people={30} description={"bla"}/>


                </div>
                <div className="row-span-5">
                  <div>
                      Room Ceiling Height
                      Large room with tall ceilings have more air circulating, so it takes longer for exhaled aerosols to reach a dangerous concentration

                  </div>
                </div>
                <div className="row-span-3">
                      <SelectionSliderHeight value={10}/>
                </div>

                <div className="row-span-1">
                    <PageFooter/>
                </div>

        </div>
    )
}
