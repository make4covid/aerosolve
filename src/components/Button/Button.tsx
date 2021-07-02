import React from 'react'
import clsx from "clsx";

export interface ButtonProps {
    /**
     Direction of a button
     0 - Up | 1 - Down | 2 - Left | 3- Right
     */
    direction: number
}

export const Button: React.FC<ButtonProps> = (
    props
) => {


    return (
            <div className="w-5/6 h-5/6 border-3 border-gray-500 cursor-pointer rounded-md">
                    { props.direction == 0 &&
                        <div className="h-full">
                            <div className={"h-2/5"}/>
                            <div
                                 style={{
                                     width: 0,
                                     height: 0,
                                     borderLeft:"10px solid transparent",
                                     borderRight: "10px solid transparent",
                                     borderBottom: "10px solid gray"
                                 }}
                                 className={"flex flex-rows m-auto"}

                            />
                        </div>
                    }
                    {
                        props.direction == 1 &&
                        <div className="h-full">
                            <div className={"h-1/2"}/>
                            <div
                                 style={{
                                     width: 0,
                                     height: 0,
                                     borderLeft: "10px solid transparent",
                                     borderRight: "10px solid transparent",
                                     borderTop: "10px solid gray"
                                 }}
                                 className={"flex flex-rows m-auto"}
                            />
                        </div>
                    }

            </div>

    )
}
