import React from 'react'
import {ItemMask, CardGroupItem } from './SelectionCardGroup/SelectionCardGroupItem/ItemMask'

export type CardGroup = {
    header: string
    items: CardGroupItem[]
}


export const GroupMask: React.FC<CardGroup> = (props) => {

    const listItems = props.items.map((item, index) =>
        <React.Fragment key={item.title}>
            <ItemMask {...item} />
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

