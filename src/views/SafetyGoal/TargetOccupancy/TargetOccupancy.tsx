import React from 'react'
import { NumberOfOccupants } from '../../../components/NumberOfOccupants/NumberOfOccupants'
import { HoursCard } from './HoursCard/HoursCard'
import { StepViewProps } from 'data'
import {PageFooter} from '../../../components/PageFooter/PageFooter'
import {PlainCard} from "../../../components/PlainCard/PlainCard";

export const TargetOccupancy: React.FC<StepViewProps> = (props) => {
    return (
        <div className="w-full h-full">
            <br/>
            <div className="w-full lg:h-96 relative bg-gray-300 rounded-xl">
                <PlainCard title={"Target Number of Occupants\n"}
                           description={`Target number of occupants~\n
                                intended for the space to be~\n
                                occupied in a single setting.~\n
                                `}
                           occupants={true}
                />
            </div>
            <br/>
            <div className="w-full h-64 relative bg-gray-300 rounded-xl">
                <PlainCard title={"Target Number of Hours"}
                           description={"Target number of occupants intended for\n the space to be occupied in a single\nsetting."}
                           hours={true}
                />
            </div>
            <br/>
        </div>
    );
};