import React, {useState} from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import {SelectionChoiceItem, SelectionOption} from "./SelectionChoiceItem/SelectionChoiceItem";

export interface SelectionChoiceOption{
    options: SelectionOption[]
    title: string
    description: string
    index?: number

}
export interface SelectionChoiceProps{
    setSelected?: (selected: number[]) => void
    setSelectedArray:(selectedArray: number[][]) => void
    selectedArray?: number[][]
    onClick?: (e:any) => void;
}

/**
 * UI Box for selectable button containing
 */
export const SelectionChoice: React.FC<SelectionChoiceOption & SelectionChoiceProps> = ({
            selectedArray=[],
            ...props}) => {
    const toggle = (option: number) => {
            // @ts-ignore
            //If collision then turn off, if on the same row then switch
            //If no collision then turn on.
            let tempt = selectedArray
            let collision = false
            for(let i = 0 ; i < tempt.length;i++){

                if(tempt[i][0] == props.index){
                    //Double click
                    if( tempt[i][1] == option){
                        tempt[i][1] = -1
                    }
                    else{
                    tempt[i][1] = option
                    }
                    collision = true
                }
            }
            if(!collision){
                // @ts-ignore
                tempt[props.index] = [props.index,option]
            }
            props.setSelectedArray([...tempt])
    };
    return(
        <div className="max-h-screen max-w-screen grid grid-cols-6">
            <div className="col-span-1 pl-4">
                <p className="text-xl font-bold">
                    {props.title}
                </p>
                <p className="">
                    {props.description}
                </p>
            </div>
            <div className="col-span-5 flex">
            {props.options.map((option,index) =>(
                <div className="inline-grid flex-grow m-2">
                    <SelectionChoiceItem
                        {...option}
                        selected={
                            // @ts-ignore
                            JSON.stringify(selectedArray[props.index])===JSON.stringify([props.index,index])}
                        onClick={()=>toggle(index)}
                    >

                    </SelectionChoiceItem>
                </div>
            ))}
            </div>
        </div>
    )
}
