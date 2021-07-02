import clsx from 'clsx'
import {RiskChip} from "../RiskChip/RiskChip";
import React from "react";

export type CovidCardProps = {
    label?: string
    className?: string
    percentage: number,
    cases: number,
    newCases: number,
    risk: "Low" | "Medium" | "High",
}

export const CovidCard: React.FC<CovidCardProps> = (props) => {

    return (
        <div className="w-full h-full border-1 rounded-md shadow-lg cursor-default">
            <section className="h-3/5 flex flex-col bg-gray-200 px-4 justify-evenly">

                <div className="font-semibold">{props.label}</div>
                <div className={"text-3xl font-semi-bold"}>{props.percentage + "%"}</div>
                <RiskChip risk={props.risk} />

            </section>
            <section className="h-2/5 bg-gray-300">
                <div className="h-1/3"/>
                <div className="grid grid-cols-4 gap-x-2 px-3">
                    <div className="col-span-2 text-xs font-medium">{"People vaccinated with at least one dose"}</div>
                    <div className={"col-span-2 text-center"}>
                        <span className={"text-lg"}>{props.cases}</span>
                        <br/>
                        <span className={"text-sm"}>{"+"} {props.newCases} {"today"}</span>
                    </div>
                </div>

            </section>
        </div>
    )
}
