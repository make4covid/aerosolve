import React, {CSSProperties, ReactDOM, useRef, useState} from 'react'
import { findDOMNode } from 'react-dom'
import $ from 'jquery';
import clsx from "clsx";

export type Slider = {
    header?: string,
    value: number,
    min: string,
    max: string,
    unit: string,
    arrayValue: Array<number>,
    style?: CSSProperties
}

export const SelectionSlider: React.FC<Slider> = (props) => {
    const [mx,setMx] = useState(0)
    const [value,setValue] = useState(props.value)
    const [start,setStart] = useState(false)
    const sliderEL = useRef(null)
    const inputEl = useRef(null);
    const startEl = useRef(null);
    const endEL = useRef(null)
    const arrowLeft =useRef(null)
    const smallRectangle = useRef(null)


    function setColor(currentCircle: number, currentWidth: number){
        let startPixel = 0;
        props.arrayValue.map((item,index)=> {
            if ((index) % 2 == 0) {
                if (currentCircle >= (startPixel / 100) * currentWidth) {
                    $("#small_circle" + index).css("background-color", "rgba(59, 130, 246, var(--tw-bg-opacity))")
                    $("#small_number" + index).css("color", "rgba(59, 130, 246, var(--tw-bg-opacity))")
                } else {
                    $("#small_circle" + index).css("background-color", "white")
                    $("#small_number" + index).css("color", "white")
                }

                startPixel += 8
            }
        })

    }
    function handleClick(e:any){
        e = e || window.event;
        e.preventDefault()
        let circle = $("#slider")
        let rect = circle.get(0).getBoundingClientRect()
        // @ts-ignore
        console.log("Total width:",sliderEL.current.clientWidth)
        // @ts-ignore
        console.log("Check:",e.clientX - rect.left - inputEl.current.offsetWidth/2)
        // @ts-ignore
        $("#circle").css("left",e.clientX - rect.left - inputEl.current.offsetWidth/2)
        // @ts-ignore
        $("#blueSlider").css("width",(inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*sliderEL.current.offsetWidth)
        // @ts-ignore
        $("#rectanglePointer").css("left",e.clientX - rect.left - smallRectangle.current.clientWidth/2)
        // @ts-ignore
        setColor(inputEl.current.offsetLeft,sliderEL.current.clientWidth)

        if(props.max.indexOf(">") != -1){
            // @ts-ignore
            let value = ((inputEl.current.offsetLeft+ 16)/sliderEL.current.offsetWidth)*parseInt(props.max.substring(props.max.indexOf(">")+1))
            if(value < 0) {
                setValue(0)
            }
            else{
                // @ts-ignore
                setValue(value)
            }
        }
        else{
            // @ts-ignore
            let value = ((inputEl.current.offsetLeft+ 16)/sliderEL.current.offsetWidth)*parseInt(props.max)
            if(value < 0) {
                setValue(0)
            }
            else{
                setValue(value)
            }
        }
    }
    function handleDrag(e:any){
        if(start) {
            e = e || window.event;
            e.preventDefault()
            let circle = $("#slider")
            let rect = circle.get(0).getBoundingClientRect()
            // @ts-ignore
            if(inputEl.current.offsetLeft >= -inputEl.current.clientWidth/2 && inputEl.current.offsetLeft <= sliderEL.current.clientWidth){
                // @ts-ignore
                $("#circle").css("left",e.clientX - rect.left - inputEl.current.offsetWidth/2)
                // @ts-ignore
                $("#rectanglePointer").css("left",e.clientX - rect.left - smallRectangle.current.clientWidth/2)

            }
            // @ts-ignore
            else if(inputEl.current.offsetLeft <=  -inputEl.current.clientWidth/2){
                // @ts-ignore
                $("#circle").css("left",sliderEL.current.offsetLeft -inputEl.current.clientWidth/2)

            }

            // @ts-ignore
            else if(inputEl.current.offsetLeft + inputEl.current.clientWidth >= sliderEL.current.clientWidth - inputEl.current.clientWidth){
                // @ts-ignore
                $("#circle").css("left", sliderEL.current.clientWidth - inputEl.current.clientWidth)

            }
            // @ts-ignore
            $("#blueSlider").css("width",(inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*sliderEL.current.offsetWidth)
            // @ts-ignore
            setColor(inputEl.current.offsetLeft,sliderEL.current.clientWidth)

            if(props.max.indexOf(">") != -1){
                // @ts-ignore
                let value = ((inputEl.current.offsetLeft+ 16)/sliderEL.current.offsetWidth)*parseInt(props.max.substring(props.max.indexOf(">")+1))
                if(value < 0) {
                    setValue(0)
                }
                else{
                    // @ts-ignore
                    setValue(value)
                }
            }
            else{
                //To-Do add padding instead of hardcoded  number 16 here
                // @ts-ignore
                let value = ((inputEl.current.offsetLeft + 16)/sliderEL.current.clientWidth)*parseInt(props.max)
                if(value < 0) {
                    setValue(0)
                }
                else{
                    setValue(value)
                }
            }
        }
    }
    function handleDragStart(e:any){
        e = e || window.event;
        e.preventDefault()
        let circle = $("#slider")
        let rect = circle.get(0).getBoundingClientRect()
        // @ts-ignore
        if(e.clientX - rect.left>= inputEl.current.offsetLeft-inputEl.current.clientWidth && e.clientX - rect.left <= inputEl.current.offsetLeft + inputEl.current.clientWidth) {
            console.log("Drag Start")
            setMx(e.clientX)
            setStart(true)
        }
    }
    function handleDragEnd(e:any){
        e.preventDefault()
        setStart(false)
    }

    // @ts-ignore
    return (
        <div>
            <div className="w-full h-full">
                <div id="main" className="relative w-full" onMouseMove={handleDrag} onMouseDown={handleDragStart} onMouseUp={handleDragEnd}>
                    <div ref={inputEl} id="circle" className={`absolute h-12 w-12 rounded-full bg-blue-500 -top-5 border-blue-500 cursor-pointer flex justify-center z-20 l-24-12`} />
                    <div ref={sliderEL} id="slider" className="absolute w-full h-2 flex bg-white z-0 cursor-pointer" onClick={handleClick}/>
                    <div id="blueSlider" className="absolute h-2 bg-blue-500 z-10 w-24-12" onClick={handleClick}/>

                    <div ref={startEl} className="z-10  absolute -top-2 h-6 w-6 rounded-full l-24-0 cursor-pointer"/>
                    <div >
                        {props.arrayValue.length > 6 && props.arrayValue.map((item,index)=>{
                            return(
                                <div>
                                    {
                                        index%2 == 0 &&
                                        <div>
                                            <div id={"small_circle" + index}

                                                 className={
                                                     clsx(`absolute -top-2 z-10 h-6 w-6 rounded-full l-24-${index} cursor-pointer ml-1`,
                                                         // @ts-ignore
                                                         index <= 12 && "bg-blue-500" ,
                                                         // @ts-ignore
                                                         index > 12 && "bg-white"
                                                     )

                                                 }


                                                 onClick={handleClick}
                                            />

                                            <div id={"small_number"+index} className={clsx(`absolute -top-10 z-10 l-24-${index} `,
                                                item < 10 && "pl-3",
                                                item < 100  && item >= 10 && "pl-2",
                                                item < 1000  && item >= 100 && "pl-1",
                                                // @ts-ignore
                                                index <= 12 && "text-blue-500" ,
                                                // @ts-ignore
                                                index > 12 && "text-white"

                                            )}

                                            >{item}</div>
                                        </div>
                                    }
                                </div>
                            )

                        })

                        }


                        {props.arrayValue.length <= 6 && props.arrayValue.map((item, index) => {
                            return (
                                <div>
                                    {
                                        <div>
                                            <div id={"small_circle" + index}

                                                 className={
                                                     clsx(`absolute -top-2 z-10 h-8 w-8 rounded-full l-24-${index*4} cursor-pointer`,
                                                         // @ts-ignore
                                                         index <= 12 && "bg-blue-200",
                                                         // @ts-ignore
                                                         index > 12 && "bg-white"
                                                     )

                                                 }


                                                 onClick={handleClick}
                                            />

                                            <div className={clsx(`absolute -top-10 z-10 l-24-${index*4} text-white`,
                                                item < 10 && "ml-3",
                                                item < 100 && item >= 10 && "ml-2",
                                                item < 1000 && item >= 100 && "ml-1",
                                            )}

                                            >{item}</div>
                                        </div>
                                    }
                                </div>
                            )

                        })
                        }
                    </div>
                    <div ref={endEL} className="absolute w-6 h-6 l-24-24"/>
                    <div id="rectanglePointer" className="absolute -top-28 l-24-10 ">
                        <div ref={smallRectangle} id="smallRectangle" className="w-48 h-12 bg-white border-4 border-blue-500 flex flex-row space-x-10 rounded-xl">
                            <div className="font-bold text-blue-600 text-3xl px-6">
                                {Math.round(value)}
                            </div>

                            <div className="font-medium text-xl pt-1">
                                {props.unit}
                            </div>
                        </div>
                        <div id="smallTriangle"  className="relative">
                            <div ref={arrowLeft} id="arrowLeft" className="absolute transform w-2 h-10 bg-blue-500 -rotate-45 -top-2 l-24-9">

                            </div>
                            <div id="arrowRight" className="absolute transform w-2 h-10 bg-blue-500 rotate-45 -top-2 l-24-13">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}