import React, {useState} from 'react'
import clsx from "clsx";

export interface DropdownSelectorProps {
    data: string[],
    placeholder: string
}
export const DropdownSelector: React.FC<DropdownSelectorProps> = (props) => {
    const [elementBG,setElementBG] = useState(-1)
    const [arrowDirection, setArrowDirection]  = useState(false as boolean)

    function handleToggle(e:any){
        e.preventDefault()
        setArrowDirection(!arrowDirection)
    }
    function handleClickElement(index:number){
        setElementBG(index)
    }
    return (

        <div className={`w-full h-full`}>
            <div className={"relative w-24 h-12 border-4 border-gray-500 cursor-pointer z-10 float-right rounded-xl"}
                 onClick={(e)=>handleToggle(e)}
            >
                <div className={"w-full h-full grid grid-rows-2"}>
                    <div className={"row-span-1"}>

                    </div>
                    <div className={"row-span-1"}>
                        { arrowDirection &&
                            <div id="arrowUp" style={{
                                width: 0,
                                height: 0,
                                borderLeft: "10px solid transparent",
                                borderRight: "10px solid transparent",
                                borderBottom: "10px solid gray"
                            }}
                                 className={"m-auto"}

                            />
                        }
                        {
                            !arrowDirection &&
                        <div id="arrowDown"
                             style={{
                             width: 0,
                             height: 0,
                             borderLeft: "10px solid transparent",
                             borderRight: "10px solid transparent",
                             borderTop: "10px solid gray"
                             }}
                             className={"m-auto"}
                        />
                        }
                    </div>
                </div>
            </div>
            <div className={`w-full h-full overflow-y-scroll rounded-lg border-4 border-blue-500`}>

                <p className={"text-gray-400 text-xl"}>{props.placeholder}</p>
                <br/>
                <ul>
                    {props.data.map((item, index) => {
                        return <li onClick={()=>handleClickElement(index)} className={clsx("px-2 cursor-pointer text-lg font-medium",
                                               elementBG == index && "text-blue-500",
                                               elementBG != index && "text-gray-500"
                                            )}  key={index}> {item} </li>;
                    })}
                </ul>
            </div>
        </div>
    )
}
