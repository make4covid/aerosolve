import React, {useState} from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import {SelectionChoiceItem, SelectionOption} from "./SelectionChoiceItem/SelectionChoiceItem";

export interface SelectionChoiceOption{
  options: SelectionOption[]
  title: string
  description?: string
  index?: number
  noDescription?: boolean,
  boxCols: number,
  totalCols: number,
  leftCol: number,
  rightCol:number

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
      <div className={`w-full h-full my-4`}>
        <div className={`container w-full h-full grid grid-rows-6`}>
          <div className={`row-span-1`}/>
          <div className={`row-span-4`}>
            <div className={`grid grid-cols-${props.totalCols}`}>
              <div className={`col-span-${props.leftCol}`}>
                <p className={clsx(" font-semibold text-center",
                    props.noDescription && "lg:text-2xl md:text-xl sm:text-base",
                    !props.noDescription && "lg:text-lg md:text-base sm:text-sm"
                    ,)
                }>
                  {props.title}
                </p>
                { !props.noDescription && <p className="font-normal text-center">
                  {props.description}
                </p>
                }
              </div>

              <div className={`w-full h-full col-span-${props.rightCol}`}>
                <div className={`container  w-full h-full grid grid-cols-${props.boxCols} gap-x-2 md:gap-x-1 lg:gap-x-2 `}>
                  {props.options.map((option,index) =>(
                      <SelectionChoiceItem
                          {...option}
                          selected={
                            // @ts-ignore
                            JSON.stringify(selectedArray[props.index])===JSON.stringify([props.index,index])}
                          onClick={()=>toggle(index)}
                      />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`row-span-1`}/>
        </div>
      </div>
  )
}