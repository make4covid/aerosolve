import React, {useState} from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import {SelectionChoice} from "../SelectionChoice/SelectionChoice";
import {SelectionChoiceOption} from "../SelectionChoice/SelectionChoice";
export interface SelectionChoiceGroupOptions {
    options : SelectionChoiceOption[]
    onClick?: (e:any)=>void
    noDescription?: boolean
}
/**
 * UI Box for a group of selectable button containing
 */
export const SelectionChoiceGroup: React.FC<SelectionChoiceGroupOptions> = ({
    noDescription=false,
    ...props
    }) => {
    const [selectedArray, setSelectedArray] = useState(Array.from(Array(props.options.length).keys()).map(() => new Array(2).fill(-1)) as number[][]);

    return(
        <div className={`h-full w-full grid grid-rows-${props.options.length} gap-4`}>
            {
                props.options.map((option,index) => (
                    <div className="w-full h-full bg-gray-200 rounded-2xl py-4">
                        <SelectionChoice
                            {...option}
                            noDescription = {noDescription}
                            selectedArray={selectedArray}
                            setSelectedArray={setSelectedArray}
                            index={index}
                        />
                    </div>
                ))
            }
        </div>
    )
}
