import React, {CSSProperties, useState} from 'react'
import {PageHeader} from "../../SubComponent/PageHeader/PageHeader";
import {SelectionSliderHeight} from "../../SubComponent/SelectionSlider/SelectionHeight/SelectionSliderHeight";
import {NumberOfOccupants} from "../../SafetyGoal/TargetOccupancy/NumberOfOccupants/NumberOfOccupants";
import {GroupAge,} from "../../SubComponent/GroupAge";
import {CardGroupItem} from "../../SubComponent/SelectionCardGroup/SelectionCardGroupItem/ItemAge";
import KidImage from "../../../icons/KidImage.png"
import {PageFooter} from "../../SubComponent/PageFooter/PageFooter";
export type OccupantAgeGroupProps={
    header?: string,
    title:string,
    question:string,
    recommendation:string,
    hours: number,
    description: string
}


const DefaultOccupantAgeGroup:CardGroupItem[] =[
    { value: "Living Room",age:"0 - 16 Years Old",risk:"Low Risk",active: true, image:KidImage,route: "test", completed: true},
    { value: "Classroom",  age:"17 - 63 Years Old",risk:"High Risk", active: false, image:KidImage, route: "test", completed: false},
    { value: "Classroom1", age:"64+ Years Old",risk:"Medium Risk", active: false, image:KidImage, route: "test", completed: false}
]


export const OccupantAgeGroup: React.FC<OccupantAgeGroupProps> = (props) => {
    const [mode,setMode] = useState(false)

    function handleSwitchMode(){
        setMode(!mode)
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-rows-6 divide-gray-400 gap-4">
                <div className="row-span-1">
                    <div className="grid grid-rows-2 divide-y-2 divide-gray-400 gap-4">
                        <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
                            <div className="col-span-6">
                                <p className="text-3xl font-bold">06/Occupant Age Groups</p>
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

                <div className="relative">
                    <button onClick={handleSwitchMode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Basic</button>

                    <button onClick={handleSwitchMode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Advanced</button>
                </div>
                <div>
                    { !mode &&
                    <div>
                        <div className="row-span-2">
                            Please select all that apply. Mouse button.
                        </div>
                        <div className="row-span-2">
                            <GroupAge items={DefaultOccupantAgeGroup} header={"Lol"}/>
                        </div>
                    </div>
                    }
                    { mode &&
                    <div>
                        <div className="row-span-2">
                           <SelectionSliderHeight value={3}/>
                           <SelectionSliderHeight value={5}/>
                           <SelectionSliderHeight value={10}/>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className="relative">
                <PageFooter/>
            </div>
        </div>
    )
}
