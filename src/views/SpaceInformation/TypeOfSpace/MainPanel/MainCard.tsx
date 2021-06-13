import React from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';
import Kids from 'assets/images/kids.png';

export interface SelectionOptions {
    title: string
    description: string
    image?: string //For display image in TypeOfSpace MainPanel
    rating?: string
}

export const MainCard: React.FC< SelectionOptions> = ({...props}) => {

    return (
        <div
            className="w-full h-full flex flex-row"
            {...props}

        >
            <div className="flex-1">
                <div className="flex flex-col">
                    <div className="flex-1 text-3xl m-4 text-gray-500 font-bold">
                        {props.title}
                    </div>
                    <div className="flex-1 text-base m-4 text-gray-500 font-bold">
                        {props.description}
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full h-full z-10">
                <img src={Kids} alt={""}/>
            </div>

            <div className="relative flex-2 w-44 h-12 bg-blue-500 my-4 mr-4 rounded-2xl z-20 right-1">
                    <p className="text-2xl text-white text-center font-bold pt-2">{props.rating}</p>
            </div>
        </div>
    );
};