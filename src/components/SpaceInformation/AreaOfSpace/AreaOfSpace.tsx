import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";
import {SelectionSliderHeight} from "../../SubComponent/SelectionSlider/SelectionHeight/SelectionSliderHeight";

import {LeftPanel} from "./LeftPanel/LeftPanel";
import {RightPanel} from "./RightPanel/RightPanel";

export type AreaOfSpaceProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}
export const AreOfSpace: React.FC<AreaOfSpaceProps> = (props) => {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-rows-6 divide-gray-400 gap-4">
                <div className="row-span-1">
                    <div className="grid grid-rows-2 divide-y-2 divide-gray-400 gap-4">
                        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
                            <div className="col-span-6">
                                <p className="text-3xl font-bold">04/Area of Space</p>
                            </div>
                            <div className="col-span-5">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <p className="text-base font-medium pl-2">This space is safe for 30 people for 6 out of 8 targets hours.</p>
                                    </div>
                                    <div className="col-span-1">
                                        <SelectionSliderHeight value={3}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
                            <div className="col-span-6">
                                <p className="text-base font-medium">What is the target occupancy for this space?</p>
                            </div>
                            <div className="col-span-5">
                                <p>Empty...</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row-span-2 position:relative z-2">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <LeftPanel size={"small apartment"} description={"18 people or less"}/>
                        </div>
                        <div className="col-span-1">
                            <RightPanel/>
                        </div>
                    </div>
                </div>
                <div className="row-span-2">
                    <SelectionSliderHeight value={5}/>
                </div>

            </div>
        </div>
    )
}
