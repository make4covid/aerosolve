import React, { CSSProperties } from 'react'

export type LeftPanelProps={
    header?: string,
    title: string,
    rate: string,
    description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {

    return (
       <div className="h-full w-full bg-blue-500 flex flex-col rounded-lg hover:bg-red-700">
            <br/>
            <p className="text-white text-2xl mx-4">
                {props.title}
            </p>

            <p className="text-white text-4xl mx-4">
                {props.rate}
            </p>

            <p className="text-white mx-4">
                {props.description}
            </p>
       </div>
    )
}
