import clsx from 'clsx'
import React, {useEffect, useState} from 'react'
import {SelectionPercentage, SelectionPercentageProps} from "components/SelectionPercentage/SelectionPercentage";

export type SelectionPercentageGroupsProps = {
    options: SelectionPercentageProps[]
}


export const SelectionPercentageGroups: React.FC<SelectionPercentageGroupsProps > = ({
            ...props
         }) => {

    const initializePercentageArray = ()=>{
        const percentageArray = new Array(props.options.length)
        for(let i = 0; i < percentageArray.length; i++){
            percentageArray[i] = props.options[i].percentage
        }
        return percentageArray
    }
    const [percentageArray, setPercentageArray] = useState(()=>{
        return initializePercentageArray();
    })
    const [lockArray,setLockArray] = useState(Array(props.options.length).fill(false)     )


    // Todo refactor this function
    const UpdatePercentageArray = (percent: number, key:number) =>{
        const newPercentageArray = [...percentageArray]
        //Calculate the difference and distribute for the whole thing
        let leftOver = 100 - percent
        for(let i = 0 ; i < newPercentageArray.length;i++){
            if(lockArray[i]){
                leftOver -= newPercentageArray[i]
            }
        }

        if(leftOver>=0) {
            newPercentageArray[key] = percent
            for(let i = 0 ; i < newPercentageArray.length;i++){
                if(i !== key && !lockArray[i]){
                    newPercentageArray[i] = 0
                }
            }
        }

        while(leftOver > 0){
            for(let i = 0 ; i < newPercentageArray.length;i++){
                if( i!= key && !lockArray[i] && newPercentageArray[i] <= 100) {
                    newPercentageArray[i] += 10
                    leftOver -= 10
                }
                if (leftOver <= 0) {
                    break
                }
            }
        }
        setPercentageArray(newPercentageArray)
    }

    const UpdateLockArray = (lock:boolean,key:number) =>{
        const newLockArray = [...lockArray]
        newLockArray[key] = lock
        setLockArray(newLockArray)
    }

    // Todo collect percentage from children
    // Todo total percentage have to be <= 100
    return (
            <div className="flex flex-col space-y-4">
                {
                    props.options.map((option,i) =>(
                        <div className="w-5/6 px-2 py-5 m-auto bg-gray-200 rounded-lg">
                            <SelectionPercentage key={i} {...option}
                                                 parentMethod={UpdatePercentageArray}
                                                 updateLockArray = {UpdateLockArray}
                                                 percent={percentageArray[i]}
                                                 id={i}
                            >
                            </SelectionPercentage>
                        </div>
                    ))
                }
            </div>
    )
}
