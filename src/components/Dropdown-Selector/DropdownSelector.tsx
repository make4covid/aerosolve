import React, {useState} from 'react'
import clsx from "clsx";

export interface DropdownSelectorProps {
    data: string[],
    placeholder: string
}
export const DropdownSelector: React.FC<DropdownSelectorProps> = (props) => {
    const [elementBG,setElementBG] = useState(-1)
    const [arrowDirection, setArrowDirection]  = useState(false as boolean) //False means up | True means down
    const [placeHolder,setPlaceHolder] = useState(props.placeholder as string)
    function handleToggle(e:any){
        e.preventDefault()
        setArrowDirection(!arrowDirection)
    }
    function handleClickElement(item:string,index:number){
        setElementBG(index)
        setPlaceHolder(item)
    }
    return (

        <div className={`w-full h-full `}>
            <div className={clsx(`w-full h-10 border-4  border-blue-500 `,
                            arrowDirection && "rounded-xl",
                            !arrowDirection && "rounded-xl border-b-0 rounded-t-xl rounded-l-sm rounded-r-sm "
                            )
                    }>
                <p className={"px-2 text-gray-400 text-xl fixed"}>{placeHolder}</p>
                <div className={"relative w-10 h-8 border-2 border-gray-400 cursor-pointer float-right rounded-xl mx-1"}
                     onClick={(e)=>handleToggle(e)}
                >
                    <div className={"w-full h-full grid grid-rows-2"}>
                        <div className={"row-span-1"}>

                        </div>
                        <div className={"row-span-1"}>
                            { arrowDirection &&
                                <div id="arrowUp"
                                     style={{
                                    width: 0,
                                    height: 0,
                                    borderLeft:"10px solid transparent",
                                    borderRight: "10px solid transparent",
                                    borderBottom: "10px solid gray"
                                }}
                                     className={"m-auto -my-1"}

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
            </div>


            <div className={
                clsx(` overflow-y-scroll scrollbar-width-thin border-t-0 border-blue-500 rounded-b-lg`,
                            arrowDirection && "w-0 h-0 border-0",
                            ! arrowDirection && "w-full h-full border-4 ",
                    )
            }

            >
                <br/>
                <ul>
                    {props.data.map((item, index) => {
                        return <li onClick={()=>handleClickElement(item,index)} className={clsx("px-2 cursor-pointer text-lg font-medium",
                                               elementBG == index && "text-blue-500",
                                               elementBG != index && "text-gray-500"
                                            )}  key={index}> {item} </li>;
                    })}
                </ul>
            </div>
        </div>

    )
}
