import React, { CSSProperties } from 'react'

export type LeftPanelProps={
    header?: string,
    title: string,
    rate: string,
    description: string
}

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {

    return (
       <div className="flex flex-row h-full w-full bg-blue-500 flex flex-col rounded-2xl hover:bg-red-700 content-center">

            <p className="flex-1 text-white font-semibold text-2xl lg:mx-16 lg:my-12 w-72">
                {props.title}
            </p>

            <p className="flex-1 text-white font-bold text-4xl lg:mx-16">
                {props.rate}
            </p>

            <p className="flex-1 text-white font-semibold lg:mx-16">
                {props.description}
            </p>
       </div>
    )
}
