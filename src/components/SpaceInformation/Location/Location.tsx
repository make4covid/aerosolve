import React, { CSSProperties } from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";
import {SelectionSliderHeight} from "../../SubComponent/SelectionSlider/SelectionHeight/SelectionSliderHeight";
import {NumberOfOccupants} from "../../SafetyGoal/TargetOccupancy/NumberOfOccupants/NumberOfOccupants";
import {InputLocation} from "../../SubComponent/InputLocation/InputLocation";
import {LeftPanel} from "./LeftPanel/LeftPanel";
import {RightPanel} from "./RightPanel/RightPanel";
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";

export type LocationProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}

export const Location: React.FC<LocationProps> = (props) => {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-rows-6 divide-gray-400 gap-4">
                <div className="row-span-1">
                    <div className="grid grid-rows-2 divide-y-2 divide-gray-400 gap-4">
                        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
                            <div className="col-span-6">
                                <p className="text-3xl font-bold">02/Location</p>
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
                                <p className="text-base font-medium">What is the occupied space located?</p>
                            </div>
                            <div className="col-span-5">
                                <p>Different age groups of people have different risk levels in the events of an aerosol infection</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row-span-2 position:relative z-2">
                    <InputLocation location={"CO"}/>
                </div>

                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <LeftPanel rate={"Low Risk"} description={"due to high vaccination rate"}/>
                    </div>
                    <div className="col-span-1">
                        <RightPanel confirmed_case={11021} today_case={17} death_total_case={420} death_today_case={0} vaccination_rate={22} vaccination_total={1272898} relative_air_humidity={47}/>
                    </div>
                </div>

            </div>
            <PageFooter/>
        </div>
    )
}
