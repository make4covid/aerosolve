import React from 'react'
import {ItemActivity,CardGroupItem} from "./SelectionCardGroupItem/ItemActivity";


export type CardGroup = {
    header: string
    items: CardGroupItem[]
}


export const GroupActivity: React.FC<CardGroup> = (props) => {

    const listItems = props.items.map((item, index) =>
        <React.Fragment key={item.title}>
            <ItemActivity {...item} />
        </React.Fragment>
    );

    return (
        <div className="">
            <h1 className="s">
                {props.header}
            </h1>
            <div className="grid grid-cols-3 gap-x-1 gap-y-1">{listItems}</div>
        </div>
    );
}

