import React, { CSSProperties }from 'react'
import "./SelectionSliderHeight.css"
export type Slider = {
    header?: string,
    value: number,
    style?: CSSProperties
}

export const SelectionSliderHeight: React.FC<Slider> = (props) => {
    // @ts-ignore
    return (
        <div>
            <div className="wrapper">
                <input id="progress" type="range" min="0" max="24" step="1" data-before/>
            </div>
        </div>
    );
}

