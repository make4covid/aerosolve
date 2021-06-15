import React, {CSSProperties, useEffect, useRef, useState} from 'react'

import clsx from "clsx";
import {useCurrentWidth} from "../useCurrentWidth";

export type SelectionHeightProps  = {
    header?: string,
    value: number,
    min: number,
    max: number,
    unit: string,
    arrayValue: Array<number>,
    style?: CSSProperties
}

export const SelectionHeight: React.FC<SelectionHeightProps> = (props) => {
    const [value,setValue] = useState(props.value)
    const [start,setStart] = useState(false)
    const [circleLeft,setCircleLeft] = useState(0)
    const [rectanglePointerLeft,setRectanglePointerLeft]  = useState(-75)
    const [blueSliderWidth, setBlueSliderWidth]   = useState(0)
    const [smallCircle,setSmallCircle] = useState(new Array(props.arrayValue.length).fill(0)) //Init left position for small circle
    const sliderEL = useRef(null)
    const circleEl = useRef(null);
    const smallRectangle = useRef(null)
    const [circleWidth,setCircleWidth] = useState(0)
    const width= useCurrentWidth()

    /*Update component after resize*/
    useEffect(()=>{
        let tempt = new Array(props.arrayValue.length)
        // @ts-ignore
        let step = Math.ceil(sliderEL.current.offsetWidth/(props.arrayValue.length-1))
        tempt[0] = -5
        for(let i = 1; i < props.arrayValue.length;i++){
            tempt[i] = step + tempt[i-1]
        }
        tempt[tempt.length-1] -= 5
        setSmallCircle([...tempt])
        // @ts-ignore
        setCircleWidth(circleEl.current.offsetWidth)

    },[width])

    /*Update component after drag or click*/
    useEffect(()=>{
        //Todo Improve the accuracy of the height value
        for(let i = 2 ; i < smallCircle.length - 1; i++){
            // @ts-ignore
            let circleLeftPosition =  circleLeft + circleEl.current.offsetWidth/2
            if( smallCircle[i-1]< circleLeftPosition && circleLeftPosition <  smallCircle[i]){
                // @ts-ignore
                let range = smallCircle[i] - smallCircle[i-1]
                let diff = circleLeftPosition - smallCircle[i-1]
                let value = (diff/range)*(props.arrayValue[i]) + props.arrayValue[i-1]
                setValue(value)
                break
            }
            // @ts-ignore
            else if(circleLeft + circleEl.current.offsetWidth/2 == smallCircle[i]){
                setValue(props.arrayValue[i])
            }
        }

    },[circleLeft])

    function handleClick(e:any){
        e = e || window.event;
        e.preventDefault()
        // @ts-ignore

        // @ts-ignore
        let circleLeft = e.clientX - sliderEL.current.getBoundingClientRect().left - circleEl.current.offsetWidth/2
        if(circleLeft >=0) {
            // @ts-ignore
            setCircleLeft(circleLeft <= 0 ? 0 : circleLeft)
            // @ts-ignore
            setBlueSliderWidth((circleLeft / sliderEL.current.offsetWidth) * sliderEL.current.offsetWidth)
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
                setCircleLeft(circleLeft < 0 ? 0 : circleLeft)
            }
            // @ts-ignore
            else if(circleLeft <=  -circleEl.current.clientWidth/2){
                // @ts-ignore
                setCircleLeft(sliderEL.current.offsetLeft - circleEl.current.clientWidth/2)
            }
            // @ts-ignore
            else if(circleLeft + circleEl.current.clientWidth >= sliderEL.current.clientWidth - circleEl.current.clientWidth){
                // @ts-ignore
                setCircleLeft(sliderEL.current.clientWidth - circleEl.current.clientWidth)
            }
            // @ts-ignore
            setBlueSliderWidth((circleEl.current.offsetLeft/sliderEL.current.offsetWidth)*sliderEL.current.offsetWidth)

            // @ts-ignore
            setRectanglePointerLeft(e.clientX - sliderEL.current.getBoundingClientRect().left - smallRectangle.current.clientWidth/2)
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
                <div className="relative w-full" onMouseMove={handleDrag} onMouseDown={handleDragStart} onMouseUp={handleDragEnd}>
                    <div ref={circleEl} id="circle" style={{left:circleLeft}} className={`absolute h-12 w-12 rounded-full bg-blue-500 -top-5 border-blue-500 cursor-pointer flex justify-center z-20`} />
                    <div ref={sliderEL} id="slider" className="absolute w-full h-2 flex bg-white z-0 cursor-pointer" onClick={handleClick}/>
                    <div id="blueSlider" style={{width:blueSliderWidth+5}} className={`absolute h-2 bg-blue-500 z-10 cursor-pointer`}   onClick={handleClick}/>
                    <div>
                        { props.arrayValue.map((item,index)=>{
                            return(
                                <div >
                                    {
                                        <div>
                                            <div
                                                id={"small_circle" +index}
                                                style={{
                                                    backgroundColor: (circleLeft + circleWidth>= smallCircle[index]) ? "rgba(59, 130, 246, var(--tw-bg-opacity))" : "white",
                                                    left: smallCircle[index]
                                                }}
                                                className={
                                                    clsx(`absolute -top-2 z-10 h-6 w-6 rounded-full  cursor-pointer`,
                                                        // @ts-ignore
                                                        //Init value
                                                        index <= 12 && "bg-blue-500" ,
                                                        // @ts-ignore
                                                        index > 12 && "bg-white"
                                                    )
                                                }
                                                onClick={handleClick}
                                            />

                                            <div id={"small_number"+index}
                                                 style={{
                                                     color: (circleLeft + circleWidth >smallCircle[index]) ? "rgba(59, 130, 246, var(--tw-bg-opacity))" : "white",
                                                     left: smallCircle[index]
                                                 }}
                                                 className={clsx(`absolute -top-10 z-10`,
                                                     index <= 12 && "text-blue-500" ,
                                                     index > 12 && "text-white",
                                                     item < 100 && " ml-1",
                                                     item <= 10000 && item >= 1000 && "-ml-1",
                                                     item <= 100000 && item > 10000 && "-ml-2",
                                                 )}

                                            >{index == 0 ?  "<" + props.min : (index == props.arrayValue.length-1?">" + props.max : item)}
                                            </div>

                                        </div>
                                    }
                                </div>
                            )
                        })
                        }
                    </div>
                    <div id="rectanglePointer" style={{left:rectanglePointerLeft}} className="absolute -top-28">
                        <div ref={smallRectangle} id="smallRectangle" className="w-52 h-12 bg-white border-4 border-blue-500 flex flex-row space-x-10 rounded-xl">
                            <div className="font-bold text-blue-600 text-3xl px-6">
                                {value < props.max ? (value < props.min ? "<" + props.min: Math.round(value)) : ">" + props.max}
                            </div>

                            <div className="absolute font-medium text-xl pt-1 pl-2 right-2">
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