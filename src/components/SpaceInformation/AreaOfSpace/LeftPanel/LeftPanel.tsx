import React, { CSSProperties } from 'react'
import Cube from "../../../../icons/AreaOfSpace_Cube.png"
export type LeftPanelProps={
    header?: string,
    size: string,
    description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {

    return (
        <div className="container mx-auto bg-gray-100 rounded-lg">
            <div className="">
                Room Size
            </div>

            <div className="">
                This space is about the size of {props.size}
            </div>

            <div className="">
                Following the "6 foot" social distancing rule, there should be {props.description} in the space
            </div>
            <div>
                <img src={Cube}/>
            </div>
        </div>
    )
}
