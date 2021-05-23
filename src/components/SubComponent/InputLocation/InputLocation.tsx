import React from 'react'
// @ts-ignore
import Location_Pointer from "../../../icons/Location_Pointer.png"
export type InputLocationProps = {
    header?: string
    location: string
}


export const InputLocation: React.FC<InputLocationProps> = (props) => {

    return (
        <div className="h-auto w-auto bg-gray-200">
           <div className="grid grid-cols-8">
               <div className="col-span-1 gap-2">
                   <img src={Location_Pointer}/>
               </div>
               <div className="col-span-2">
                   Input Location
               </div>

                    <input className="col-span-5 w-5/8 w-100 bg-white-500 border-2 border-blue-500 rounded-lg gap-2" placeholder="State"/>
               </div>
        </div>
    );
}

