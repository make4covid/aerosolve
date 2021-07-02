import React, {useEffect, useState} from 'react'

import {DropdownSelector} from "components/Dropdown-Selector/DropdownSelector";
import {stateName,countyName} from "../../data/state-county";
import {Location} from "assets/svg/index"
import clsx from "clsx";

export type InputLocationProps = {
  header?: string
  className?: string
}

export const InputLocation: React.FC<InputLocationProps> = (props) => {


    const [county,setCounty] = useState("County" as string)
    const [countyList,setCountyList] = useState([] as string[])
    const [state,setState]   = useState("State" as string)


  const updateState = (state:string) => {
        setState(state)

    }
    const updateCounty = (county:string) => {
        setCounty(county)
    }

    useEffect(()=>{
        setCountyList(countyName[state])
    },[state])

    return (
      <div className={clsx("w-full h-5/6 bg-gray-100 rounded-xl shadow-lg",
                      props.className
                        )}>
        <div className="h-1/6"/>
        <div className="flex flex-row space-x-4">
            <Location className="w-8 h-8 mt-1 ml-3"/>

            <div className="m-2">Location</div>
            <div className="w-2/5"/>
            <DropdownSelector isIntegration={true}
                              data={stateName}
                              placeholder={"State"}
                              callbackToParent={updateState}
            />
            <DropdownSelector isIntegration={true}
                              data={countyList}
                              placeholder={"County"}
                              callbackToParent={updateCounty}
            />

        </div>
      </div>
  )
}
