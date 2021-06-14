import React, {useState} from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import {SelectionChoice} from "../SelectionChoice/SelectionChoice";
import {SelectionChoiceOption} from "../SelectionChoice/SelectionChoice";
export interface SelectionChoiceGroupOptions {
    options : SelectionChoiceOption[]
    onClick?: (e:any)=>void
}
/**
 * UI Box for a group of selectable button containing
 */
export const SelectionChoiceGroup: React.FC<SelectionChoiceGroupOptions> = ({

    ...props
    }) => {
    const [selectedArray, setSelectedArray] = useState(Array.from(Array(props.options.length).keys()).map(() => new Array(2).fill(-1)) as number[][]);

    return(
        <div className={`max-h-screen max-w-screen grid grid-rows-${props.options.length}`}>
            {console.log("Rerender")}
            {
                props.options.map((option,index) => (
                    <SelectionChoice
                        {...option}
                        selectedArray={selectedArray}
                        setSelectedArray={setSelectedArray}
                        index={index}
                    />
                ))
            }
        </div>
    )
}
