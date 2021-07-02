import React, {ChangeEvent, useEffect, useState} from 'react'
import clsx from "clsx";
import {Button} from "components/Button/Button"

export interface DropdownSelectorProps {
    data: any,
    placeholder: string,
    callbackToParent?: (county:any) => void
    /**
        Check if need to trigger above component
     */
    isIntegration: boolean,
    className?: string
    onClick?: ()=>void
}
export const DropdownSelector: React.FC<DropdownSelectorProps> = (
    props
    ) => {
    const [elementBG,setElementBG] = useState(-1)
    const [arrowDirection, setArrowDirection]  = useState(true as boolean) //True means up | False means down
    const [input,setInput] = useState("" as string)
    const [list,setList] = useState(props.data as string[])
    function handleToggle(e:any){
        e.preventDefault()
        setArrowDirection(!arrowDirection)
    }
    function handleClickElement(item:string,index:number){
        setElementBG(index)
        setInput(item)
        setArrowDirection(!arrowDirection)
        if(props.isIntegration) {
            // @ts-ignore
            props.callbackToParent(item)
        }
    }
    const search = (e: ChangeEvent<HTMLInputElement>) =>{
        setInput(e.target.value)
    }

    useEffect(()=>{
        if(input.length == 0){
            setList(props.data)
        }
        else{
            let newList = []
            for(let i = 0 ; i < props.data.length;i++){
                if(props.data[i].includes(input)){
                    newList.push(props.data[i])
                }
            }
            setList(newList)
        }
    },[input])

    useEffect(()=>{
        setList(props.data)
    },[props.data])

    return (

        <div className={clsx(`w-full h-5/6  shadow-lg`
                        ,
                        props.className
                        )}>
            <div className={clsx(`flex flex-row h-10 border-3  border-blue-500 rounded-sm bg-white`,
                            !arrowDirection && "border-b-0",
                            arrowDirection  && "rounded-lg"
                            )
                    }>
                <input type="text"
                       placeholder={props.placeholder}
                       className={"focus:outline-none  w-3/4 h-full text-gray-400 lg:text-lg md:text-md  ml-2"}
                       value={input}
                       onChange={(e) => search(e)}
                />

                <div className={"w-1/5 h-full mt-1 float-right"}
                    onClick={handleToggle}
                >
                    <Button direction={arrowDirection? 0 : 1}/>
                </div>

            </div>


            <div className={
                clsx(` overflow-y-scroll scrollbar-width-thin border-t-0 border-blue-500 rounded-b-lg bg-white`,
                            arrowDirection && "w-0 h-0 border-0",
                            ! arrowDirection && "w-full h-48 border-3",
                    )
            }

            >
                <br/>
                <ul>
                    {   list != undefined

                        && list.map((item:any, index:any) => {
                        return <li onClick={()=>handleClickElement(item,index)} className={clsx("px-2 cursor-pointer lg:text-lg md:text-md font-medium",
                                               elementBG == index && "text-blue-500",
                                               elementBG != index && "text-gray-500"
                                            )}  key={index}> {item} </li>;
                    })}
                </ul>
            </div>
        </div>

    )
}
