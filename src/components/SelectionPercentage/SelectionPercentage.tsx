import clsx from 'clsx'
import React, {useEffect, useState} from 'react'
import {ReactComponent as Unlock} from "assets/icons/unlock.svg"
import {ReactComponent as Lock} from "assets/icons/lock.svg"

export type SelectionPercentageProps = {
    title: string
    rating: string
    max?: number,
    percentage: number
    /**
     Percentage from parent calculation
     */
    percentageArray?: number[]
    /**
     Percentage from parent calculation
     */
    percent?: number[]
    /**
       Call parent method when change the percentage
     */
    parentMethod?: (percent:number, key:number) => void
    /**
     Identifier
     */
    id?: number,
    /**
     Single or many selectionPercentage
     */

    multi: boolean
    updateLockArray?: (lock:boolean, key:number) => void
}

export const SelectionPercentage: React.FC<SelectionPercentageProps > = ({
     max = 10,
     title= "",
     rating = "",
     percentage =  30,
     multi= false,
         ...props
}) => {
    const initializeTickArray = ()=>{
        const tickArray = new Array(max)
        // Todo Refactor these codes
        if(multi) {
            // @ts-ignore
            for (let i = 0; i < Math.round(max * props.percent / 100); i += 1) tickArray[i] = 2
            // @ts-ignore
            for (let i = Math.round(max * props.percent / 100); i < max; i += 1) tickArray[i] = 0
        }
        else{
            // @ts-ignore
            for (let i = 0; i < Math.round(max * percentage / 100); i += 1) tickArray[i] = 2
            // @ts-ignore
            for (let i = Math.round(max * percentage/ 100); i < max; i += 1) tickArray[i] = 0
        }
        return tickArray
    }
    const [tickArray,setTickArray] = useState(()=>{
        return initializeTickArray();
    })
    const [percent,setPercentage] = useState(percentage)
    const [lock,setLock]          = useState(false)   //False means Unlock, True means Lock
    const clickTick = (index:number) =>{
        if(!lock) {
            if(!multi){
                const newTickArray = [...tickArray]
                for (let i = 0; i <= index; i++) {
                    newTickArray[i] = 2
                }
                for (let i = index + 1; i < max; i++) {
                    newTickArray[i] = 0
                }
                setPercentage((index + 1) * 10)
                setTickArray(newTickArray)
            }
            else{
                // @ts-ignore
                props.parentMethod((index + 1) * 10, props.id)
            }
        }
   }

   useEffect(()=>{
       if(multi) {
           // @ts-ignore
           setPercentage(props.percent)
           setTickArray(initializeTickArray())
       }
   },[props.percent])
   const hoverTick = (index:number) =>{
        if(!lock) {
            const newTickArray = [...tickArray]
            for (let i = 0; i <= index; i++) {
                if (newTickArray[i] == 0) {
                    newTickArray[i] = 1
                }
            }
            for (let i = index + 1; i < max; i++) {
                if (newTickArray[i] != 2) {
                    newTickArray[i] = 0
                }
            }
            setTickArray(newTickArray)
        }
   }
   const clearTick = () =>{
        if(!lock) {
            const newTickArray = [...tickArray]
            for (let i = 0; i < max; i++) {
                if (newTickArray[i] != 2) {
                    newTickArray[i] = 0
                }
            }
            setTickArray(newTickArray)
        }
   }
   const clickLock = ()=>{
        if(multi){
            // @ts-ignore
            props.updateLockArray(!lock,props.id)
        }
        setLock(!lock)
   }

    const tickMarks: React.ReactFragment = tickArray.map((v,i) =>{
        return (
        <div
            className={clsx(
                'flex flex-col items-center cursor-pointer transition-colors duration-150 w-4')}
            key={`${i}`}
            onClick={(e)=> clickTick(i)}
            onMouseEnter={(e) => hoverTick(i)}
            onMouseLeave={(e) => clearTick()}
            >
            <div
                className={clsx(
                    'w-6 h-6 rounded-full cursor-pointer transition-colors duration-150 hover:bg-blue-400',
                        v == 2 && "bg-blue-500",
                        v == 1 && "bg-blue-400",
                        v == 0 && "bg-white"
                    )}
            >

            </div>
        </div>
        )
        }
    )
    return (
        <div className="w-full h-full bg-gray-200">
            <div className="grid grid-cols-9 gap-x-4">
                <div className="flex flex-col col-span-2">
                    <div className="lg:text-lg lg:font-medium sm:text-base sm:font-normal">{title}</div>
                    <div className="text-blue-600 font-normal">{rating}</div>
                </div>
                <div className="col-span-6 m-auto w-full">
                    <div  className="relative align-middle flex flex-row items-center justify-between overflow-visible rounded-full">
                        {tickMarks}
                    </div>
                </div>
                <div className="col-span-1 flex flex-row items-center justify-between">
                    <div className="text-2xl text-blue-600">
                        {percent}%
                    </div>
                    {!lock && <Unlock
                        onClick={clickLock}
                        className="cursor-pointer"
                    />}
                    {lock && <Lock onClick={clickLock}
                        className="cursor-pointer"
                    />}

                </div>

            </div>
        </div>
    )
}
