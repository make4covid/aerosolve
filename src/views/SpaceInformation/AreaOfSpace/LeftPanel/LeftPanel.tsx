
import React, { CSSProperties } from 'react';
import Cube from 'assets/old/AreaOfSpace_Cube.png';
export type LeftPanelProps = {
    header?: string;
    size: string;
    description: string;
};

export const LeftPanel: React.FC<LeftPanelProps> = (props) => {
    return (
        <div className="h-full w-full bg-gray-100 rounded-2xl">
            <p className="text-bold text-3xl p-4">Room Size</p>
            <p className="p-4">This space is about the size of <span className="text-blue-500 font-bold">{props.size}</span>.</p>

            <p className="p-4">
                Following the "6 foot" social distancing rule, there should be{'\n'}
                <span className="text-blue-500 font-bold">{props.description}</span> in the space.
            </p>

            <img className="relative float-right -left-4" src={Cube} />

        </div>
    );
};