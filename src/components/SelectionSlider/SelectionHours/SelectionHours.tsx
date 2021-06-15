import React, {CSSProperties, useEffect, useRef, useState} from 'react'

import clsx from "clsx";
import {useCurrentWidth} from "../useCurrentWidth";

export type SelectionHoursProps  = {
    header?: string,
    value: number,
    min: number,
    max: number,
    unit: string,
    arrayValue: Array<number>,
    style?: CSSProperties
}

export const SelectionHours: React.FC<SelectionHoursProps> = (props) => {
    const [value,setValue] = useState(props.value)
    const [start,setStart] = useState(false)
    const [circleLeft,setCircleLeft] = useState(-10)
    const [circleWidth,setCircleWidth] = useState(0)
    const [rectanglePointerLeft,setRectanglePointerLeft]  = useState(-75) //Maybe need to assign value for large, medium ,small?
    const [blueSliderWidth, setBlueSliderWidth]   = useState(0)
    const sliderEL = useRef(null)
    const circleEl = useRef(null);
    const smallRectangle = useRef(null)
    const width= useCurrentWidth()
    const [smallCircle,setSmallCircle] = useState(new Array(props.arrayValue.length).fill(0))

    //Update element position whenever resize width
    useEffect(()=>{
        let tempt = new Array(props.arrayValue.length)
        // @ts-ignore
        let step = Math.ceil(sliderEL.current.offsetWidth/props.arrayValue.length)
        tempt[0] = -5
        for(let i = 1; i < props.arrayValue.length;i++){
            tempt[i] = step + tempt[i-1]
        }
        tempt[tempt.length-1] += 5
        setSmallCircle([...tempt])
        // @ts-ignore
        setCircleWidth(circleEl.current.offsetWidth)
    },[width])


    /*Update component after drag or click*/
    useEffect(()=>{
        // @ts-ignore
        setBlueSliderWidth(circleLeft >= 0 ? (circleLeft / sliderEL.current.offsetWidth) * sliderEL.current.offsetWidth : 0)
        // @ts-ignore
        let value = ((circleLeft + circleEl.current.clientWidth/2)/sliderEL.current.clientWidth)*parseInt(props.max)
        setValue(value <= 0 ? 0 : value)

    },[circleLeft])

    function handleClick(e:any){
        e = e || window.event;
        e.preventDefault()
        // @ts-ignore
        let circleLeft = e.clientX - sliderEL.current.getBoundingClientRect().left - circleEl.current.offsetWidth/2
        //Todo- Improve the look when move big circle to very left edge and the very right edge
        // @ts-ignore
        if(circleLeft >= 0) {
            console.log("offsetLeft:", circleLeft)
            setCircleLeft(circleLeft)
            // @ts-ignore
            setRectanglePointerLeft(e.clientX - sliderEL.current.getBoundingClientRect().left - smallRectangle.current.clientWidth / 2)
        }
        return
    }
    function handleDrag(e:any){
        if(start) {
            e = e || window.event;
            e.preventDefault()
            // @ts-ignore
            let circleLeft =  e.clientX - sliderEL.current.getBoundingClientRect().left - circleEl.current.offsetWidth/2
            // @ts-ignore
            if(circleLeft >= -circleEl.current.clientWidth/2 && circleLeft <= sliderEL.current.clientWidth){
                // @ts-ignore
                setCircleLeft(circleLeft)
            }
            // @ts-ignore
            else if(circleLeft <=  - circleEl.current.clientWidth/2){
                // @ts-ignore
                setCircleLeft(sliderEL.current.offsetLeft - circleEl.current.clientWidth/2)
            }
            // @ts-ignore
            else if(circleLeft + circleEl.current.clientWidth >= sliderEL.current.clientWidth - circleEl.current.clientWidth){
                // @ts-ignore
                setCircleLeft(sliderEL.current.clientWidth - circleEl.current.clientWidth)
            }
            // @ts-ignore
            setRectanglePointerLeft(e.clientX - sliderEL.current.getBoundingClientRect().left - smallRectangle.current.clientWidth/2)
            return
        }
    }
    function handleDragStart(){

        // @ts-ignore
        if(circleLeft>= circleEl.current.offsetLeft-circleEl.current.clientWidth && circleLeft <= circleEl.current.offsetLeft + circleEl.current.clientWidth) {
            setStart(true)
        }
    }
    function handleDragEnd(e:any){
        e.preventDefault()
        setStart(false)
    }
    return (
        <div>
            <div className="w-full h-full">
                <div  className="relative w-full" onMouseMove={handleDrag} onMouseDown={handleDragStart} onMouseUp={handleDragEnd}>
                    <div ref={circleEl} id="circle" style={{left:circleLeft}} className={`absolute h-12 w-12 rounded-full bg-blue-500 -top-5 border-blue-500 cursor-pointer flex justify-center z-20`} />
                    <div ref={sliderEL} id="slider" className="absolute w-full h-2 flex bg-white z-0 cursor-pointer" onClick={handleClick}/>
                    <div id="blueSlider" style={{width:blueSliderWidth+5}} className={`absolute h-2 bg-blue-500 z-10`}   onClick={handleClick}/>
                    <div>
                        {props.arrayValue.map((item,index)=>{
                            return(
                                <div >
                                    {
                                        index%2 == 0 &&
                                        <div>
                                            <div
                                                id={"small_circle" +index}
                                                style={{

                                                    backgroundColor: (circleLeft + circleWidth>= smallCircle[index]) ? "rgba(59, 130, 246, var(--tw-bg-opacity))" : "white",
                                                    left: smallCircle[index]
                                                }}
                                                className={
                                                     clsx(`absolute -top-2 z-10 h-6 w-6 rounded-full l-24-${index} cursor-pointer`,
                                                         // @ts-ignore
                                                         //Init value
                                                     )
                                                 }
                                                 onClick={handleClick}
                                            />

                                            <div id={"small_number"+index}
                                                style={{

                                                    color: (circleLeft + circleWidth >smallCircle[index]) ? "rgba(59, 130, 246, var(--tw-bg-opacity))" : "white",
                                                    left: smallCircle[index]
                                                }}
                                                className={clsx(`absolute -top-10 z-10 l-24-${index}`,
                                                item < 10 && " ml-2",
                                                item < 100 && " ml-1"
                                            )}

                                            >{item}</div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                        }
                    </div>
                    <div id="rectanglePointer" style={{left:rectanglePointerLeft}} className="absolute -top-28">
                        <div ref={smallRectangle} id="smallRectangle" className="w-48 h-12 bg-white border-4 border-blue-500 flex flex-row space-x-10 rounded-xl">
                            <div className="font-bold text-blue-600 text-3xl px-6">
                                {Math.round(value)}
                            </div>

                            <div className="font-medium text-xl pt-1">
                                {props.unit}
                            </div>
                        </div>
                        <div id="smallTriangle"  className="relative">
                            <div id="arrowLeft" className="absolute transform w-2 h-10 bg-blue-500 -rotate-45 -top-2 l-24-9">

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