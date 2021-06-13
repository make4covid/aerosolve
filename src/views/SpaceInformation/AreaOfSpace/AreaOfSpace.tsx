import React from 'react'

import { LeftPanel } from './LeftPanel/LeftPanel'
import { RightPanel } from './RightPanel/RightPanel'
import { SelectionCard } from './Selection/Selection'
import { StepViewProps } from 'data'
import {PlainCard} from "../../../components/PlainCard/PlainCard";

export const AreaOfSpace: React.FC<StepViewProps> = (props) => {
    return (
        <div className="w-full h-full my-4">
            <div className="w-full lg:h-96  rounded-xl">
                <div className="flex">
                    <div className="inline-block w-6/12 h-80 rounded-3xl">
                        <div className="w-2/3 h-full">
                            <LeftPanel
                                size={'small apartment'}
                                description={'18 people or less'}
                            />
                        </div>
                    </div>
                    <div className="inline-block rounded-xl">
                        <RightPanel />
                    </div>
                </div>
            </div>
            <div className="w-full h-64 relative bg-gray-300 rounded-xl">
                <PlainCard title={"Selection"}
                           description={""}
                           selectionSquareFt={true}
                />
            </div>


        </div>
    );
}
