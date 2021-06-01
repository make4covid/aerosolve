import React from 'react'
import {ItemAge,CardGroupItem} from "./SelectionCardGroupItem/ItemAge";


export type CardGroup = {
    header?: string
    items: CardGroupItem[]
}


export const GroupAge: React.FC<CardGroup> = (props) => {

    const listItems = props.items.map((item, index) =>
        <React.Fragment key={item.value}>
            <ItemAge {...item} />
        </React.Fragment>
    );

    return (
        <div className="">
            <div className="grid grid-cols-3 gap-x-1 gap-y-1">{listItems}</div>
        </div>
    );
}
