import React, { CSSProperties }from 'react'
import Expand_Vector from "../../../../icons/Expand_Vector.png";

export type OccupantsCardProps = {
    header: string,
    nOfOccupant: number,
    style?: CSSProperties
}

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {
    return (
        <div className="">
            <h1 className="s">
                {props.header}
            </h1>
            <div className={"px-4 bg-white shadow-lg rounded-xl bg-gray-200" }>
                <div className={"font-sans py-0 text-lg text-gray-800 font-semibold" }>{props.nOfOccupant}</div>

            </div>
        </div>
    );
}

