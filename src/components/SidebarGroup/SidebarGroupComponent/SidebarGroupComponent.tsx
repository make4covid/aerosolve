import React from 'react'
import { Selected } from '../../../stories/Box.stories'
import checkmark from './Checkmark.png'

export interface SidebarGroupComponentProps {
    //Name of the component.
    componentName: string;

    //Is the state completed?
    completed?: boolean;

    //Is the state selected (being done)?
    selected?: boolean;
}

const SidebarGroupComponent: React.FC<SidebarGroupComponentProps> = ({ componentName, completed, selected }) => {
    
    {/*TODO: Need to figure out a way to round only the top and bottom components */}


    if(completed){
        return (
            <div className=" rounded-t-md border relative h-8 w-56 ">
                <h1 className=" text-blue-600 text-sm  font-sans font-normal absolute  left-0 w-23">{componentName}
                </h1>
                {/* <span className="self-center "> 
                    <img src={checkmark}/>
                </span> */}
                 <img src={checkmark} className="self-center absolute p-2 right-0 w-23"/>

            </div>
        )
    }

    else if (selected){
        return (
            <div className="w-56 h-8 rounded-b-md border bg-blue-500 flex">
            <h1 className=" text-white text-sm  font-sans font-normal">{componentName}
            </h1>
            </div>

        )
    }

    else{//Default
        return(
            <div className="w-56 h-8 rounded-md border flex">
            <h1 className=" text-gray-500 bg-white text-sm  font-sans font-medium divide-y divide-gray-500">{componentName}
            </h1>
            </div>
        )
    }
}

export default SidebarGroupComponent
