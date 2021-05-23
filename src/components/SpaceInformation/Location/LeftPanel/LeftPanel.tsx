import React, { CSSProperties } from 'react'

export type LeftPanelProps={
    header?: string,
    rate: string,
    description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {

    return (
       <div className="container mx-auto bg-blue-500 rounded-lg">
            <div className="text-white">
                The COVID transmissive rate at your current location is at
            </div>

            <div className="text-white text-xl">
                {props.rate}
            </div>

            <div className="text-white">
                {props.description}
            </div>
       </div>
    )
}
