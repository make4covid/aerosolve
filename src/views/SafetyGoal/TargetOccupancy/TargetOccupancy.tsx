import React from 'react'
import { StepViewProps } from 'data'
import {PlainCard} from "../../../components/PlainCard/PlainCard";

export const TargetOccupancy: React.FC<StepViewProps> = (props) => {
    return (
        <div className="w-full h-full">
            <div className="w-full lg:h-96 relative bg-gray-300 rounded-xl my-4">
                <PlainCard title={"Target Number of Occupants\n"}
                           description={`Target number of occupants~\n
                                intended for the space to be~\n
                                occupied in a single setting.~\n
                                `}
                           occupants={true}
                />
            </div>
            <div className="w-full h-64 relative bg-gray-300 rounded-xl">
                <PlainCard title={"Target Number of Hours"}
                           description={"Target number of occupants intended for\n the space to be occupied in a single\nsetting."}
                           selectionHours={true}
                />
            </div>
        </div>
    );
};