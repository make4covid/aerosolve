import React from 'react'
import { Selected } from '../../../stories/Box.stories'

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
            <div className="w-56 rounded-t-md border">
                <h1 className="componentName text-blue-600 text-sm flex font-sans font-normal ">{componentName}
                <span className="text-white bg-yellow-400 float-right"> 

                    <img src="./Checkmark.png" className="shadow rounded max-w-full h-auto align-middle border-none" />

                </span>
                </h1>
            </div>
        )
    }

    else if (selected){
        return (
            <div className="w-56 rounded-b-md border bg-blue-500">
            <h1 className="componentName text-white text-sm flex font-sans font-normal">{componentName}
            </h1>
            </div>

        )
    }

    else{//Default
        return(
            <div className="w-56 rounded-md border">
            <h1 className="componentName text-gray-500 bg-white text-sm flex font-sans font-medium divide-y divide-gray-500">{componentName}
            </h1>
            </div>
        )
    }
}

export default SidebarGroupComponent
