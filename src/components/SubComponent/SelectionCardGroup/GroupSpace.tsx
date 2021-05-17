import React from 'react'
import {ItemSpace, CardGroupItem } from './SelectionCardGroupItem/ItemSpace'

export type CardGroup = {
    header: string
    items: CardGroupItem[]
}


export const GroupSpace: React.FC<CardGroup> = (props) => {

    const listItems = props.items.map((item, index) =>
        <React.Fragment key={item.value}>
            <ItemSpace {...item} />
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

