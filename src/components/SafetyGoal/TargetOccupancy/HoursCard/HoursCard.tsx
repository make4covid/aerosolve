import React, {CSSProperties, useState} from 'react'
import {SelectionSliderHeight} from "../../../SubComponent/SelectionSlider/SelectionHeight/SelectionSliderHeight";

export type HoursCardProps = {
    header?: string,
    hours: number,
    style?: CSSProperties
}

export const HoursCard: React.FC<HoursCardProps> = (props) => {

    return (
        <div className="container w-auto h-auto rounded-xl bg-gray-300">
            <p>Number of Hours</p>
            <p>Target number of hours intended for the space to be occupied in a single setting.</p>
            <SelectionSliderHeight value={20}/>
        </div>
    );
}

