import React, { CSSProperties } from 'react'

export type RightPanelProps={
    header?: string,
    confirmed_case: number,
    today_case: number
    death_total_case: number,
    death_today_case: number,
    vaccination_rate: number,
    vaccination_total: number,
    relative_air_humidity: number
}

export const RightPanel: React.FC<RightPanelProps> = (props) => {

    return (
        <div className="flex flex-col h-full w-full bg-gray-100 rounded-lg">
            <div className="flex-1 text-white mx-8">
                <div className="text-2xl text-gray-400 font-bold">Confirmed Covid Cases in Colorado</div>
                <div >
                    <span className="text-gray-500 text-4xl font-semibold">{props.confirmed_case}</span>
                    <span className="text-gray-600 text-2xl font-semibold">&ensp;+{props.today_case} cases today</span>
                </div>
            </div>

            <div className="flex-1 text-white text-xl mx-8">
                <div className="text-2xl text-gray-400 font-bold">Deaths</div>
                <div >
                    <span className="text-gray-500 text-4xl font-semibold">{props.death_today_case}</span>
                    <span className="text-gray-600 text-2xl font-semibold">&emsp;+{props.death_today_case} cases today</span>
                </div>
            </div>

            <div className="flex-1 text-white mx-8">
                <div className="text-2xl text-gray-400 font-bold">Vaccination Rate</div>
                <div>
                    <span className="text-gray-500 text-4xl font-semibold">{props.vaccination_rate}%</span>
                    <span className="text-gray-600 text-2xl font-semibold">&emsp;{props.vaccination_total} people fully immunized</span>
                </div>
            </div>

            <div className="flex-1 text-white mx-8">
                <div className="text-2xl text-gray-400 font-bold">Relative Air Humidity</div>
                <div className="text-gray-600 text-2xl font-semibold">{props.relative_air_humidity}%</div>
            </div>
        </div>
    )
}
