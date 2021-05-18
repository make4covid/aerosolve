import React, { CSSProperties } from 'react'
import Expand_Vector from "../../../../icons/Expand_Vector.png"
export type CardGroupItem = {
    value: string,
    risk: string,
    route: string,
    completed: boolean,
    active?: boolean,
    style?: CSSProperties
}

export const ItemSpace: React.FC<CardGroupItem> = (props) => {
    let statusStyles = props.active ? " text-white bg-blue-600 cursor-default " : " text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer "
    props.completed && (statusStyles += "shadow-inner text-blue-600 hover:bg-blue-100 cursor-pointer ")
    return (
        <div className={"px-4 bg-white shadow-lg rounded-xl bg-gray-200" + statusStyles}>
            <div className={"font-sans py-0 text-lg text-gray-800 font-semibold" }>{props.value}</div>
            <div className={"font-sans text-base text-gray-800 font-semibold text-blue-600" }>{props.risk}</div>
            <p></p>
            <p></p>
            <div className={"object-left flex" }>
                <img className="object-contain" src={Expand_Vector}/>
                <h1 className="font-sans text-left font-small font-semibold">Expand</h1>
            </div>
        </div>
    )
}

export default ItemSpace
