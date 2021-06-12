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

        let startPixel = -1;

        props.arrayValue.map((index,item)=> {
            if (index % 2 == 0) {
                if (currentCircle >= (startPixel / 100) * currentWidth) {
                    $("#small_circle" + item).css("background-color", "blue")
                } else {
                    $("#small_circle" + item).css("background-color", "white")
                }
                startPixel += 8.4
            }
        })

    }
    function handleClick(e:any){
        e = e || window.event;
        e.preventDefault()
        let circle = $("#slider")
        let rect = circle.get(0).getBoundingClientRect()
        // @ts-ignore
        $("#circle").css("left",e.clientX - rect.left)
        // @ts-ignore
        $("#blueSlider").css("width",(inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*sliderEL.current.offsetWidth)
        // @ts-ignore
        $("#rectanglePointer").css("left",e.clientX - rect.left - smallRectangle.current.clientWidth/2)
        // @ts-ignore
        setColor(inputEl.current.offsetLeft,sliderEL.current.clientWidth)
        // @ts-ignore
        console.log("Test:",inputEl.current.offsetLeft,startEl.current.offsetLeft - rect.left,inputEl.current.clientWidth,endEL.current.offsetLeft - rect.left)
        if(props.max.indexOf(">") != -1)
            // @ts-ignore
            setValue((inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*parseInt(props.max.substring(props.max.indexOf(">")+1)))
        else{
            // @ts-ignore
            setValue((inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*parseInt(props.max))
        }
    }
    function handleDrag(e:any){
        if(start) {
            e = e || window.event;
            e.preventDefault()
            let circle = $("#slider")
            let rect = circle.get(0).getBoundingClientRect()
            // @ts-ignore
            if(inputEl.current.offsetLeft >= startEl.current.offsetLeft - rect.left && inputEl.current.offsetLeft - rect.left <= endEL.current.offsetLeft + endEL.current.clientWidth - rect.left){
                // @ts-ignore
                $("#circle").css("left",e.clientX - rect.left)
                // @ts-ignore
                $("#rectanglePointer").css("left",e.clientX - rect.left - smallRectangle.current.clientWidth/2)

            }
            // @ts-ignore
            else if(inputEl.current.offsetLeft < startEl.current.offsetLeft){
                // @ts-ignore
                $("#circle").css("left",startEl.current.offsetLeft - rect.left + 10 )

            }
            // @ts-ignore
            else if(inputEl.current.offsetLeft + inputEl.current.clientWidth - rect.left> endEL.current.offsetLeft - rect.left){
                // @ts-ignore
                $("#circle").css("left",endEL.current.offsetLeft - rect.left - 10)

            }
            // @ts-ignore
            $("#blueSlider").css("width",(inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*sliderEL.current.offsetWidth)

            if(props.max.indexOf(">") != -1)
                // @ts-ignore
                setValue((inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*parseInt(props.max.substring(props.max.indexOf(">")+1)))
            else{
                // @ts-ignore
                setValue((inputEl.current.offsetLeft/sliderEL.current.offsetWidth)*parseInt(props.max))
            }
            // @ts-ignore
            setColor(inputEl.current.offsetLeft,sliderEL.current.clientWidth)
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
            <div className="h-full w-full">
                <div  id="main" className="relative flex flex-row w-screen" onMouseMove={handleDrag} onMouseDown={handleDragStart} onMouseUp={handleDragEnd}>
                    <div ref={inputEl} id="circle" className={`absolute h-12 w-12 rounded-full bg-blue-500 -top-4 border-blue-500 cursor-pointer flex justify-center z-20 l-24-8`} />
                    <div ref={sliderEL} id="slider" className="w-8/12 h-4 flex absolute bg-white z-0 cursor-pointer lg:left-10" onClick={handleClick}>
                        <div id="blueSlider" className="h-4 flex absolute bg-blue-500 z-10 w-24-12" onClick={handleClick}/>
                        <div ref={startEl} className="absolute -top-2 z-10 h-8 w-8 bg-white rounded-full l-24-10"/>

                        {props.arrayValue.length > 6 && props.arrayValue.map((item,index)=>{
                            return(
                                <div>
                                    {
                                        index%2 == 0 &&
                                        <div>
                                            <div id={"small_circle" + index}

                                                 className={
                                                     clsx(`absolute -top-2 z-10 h-8 w-8 rounded-full l-24-${index} cursor-pointer`,
                                                         // @ts-ignore
                                                         index <= 12 && "bg-blue-500" ,
                                                         // @ts-ignore
                                                         index > 12 && "bg-white"
                                                     )

                                                 }


                                                 onClick={handleClick}
                                            />

                                            <div className={clsx(`absolute -top-10 z-10 l-24-${index} text-white`,
                                                item < 10 && "ml-3",
                                                item < 100  && item >= 10 && "ml-2",
                                                item < 1000  && item >= 100 && "ml-1",

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
                                                         index <= 12 && "bg-blue-500",
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

                        <div ref={endEL} className="absolute -top-2 z-10 h-8 w-8 bg-white rounded-full l-24-24"/>
                        <div id="rectanglePointer" className="absolute -top-28 l-24-10">
                            <div ref={smallRectangle} id="smallRectangle" className="w-48 h-12 border-8 border-blue-500 flex flex-row space-x-10 rounded-md">
                                <div className="font-bold text-blue-600 text-2xl">
                                    {Math.round(value)}
                                </div>

                                <div className="font-medium text-xl">
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
        </div>
    );
}