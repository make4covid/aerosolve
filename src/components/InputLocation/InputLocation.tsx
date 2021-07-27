import React, { useEffect, useState } from 'react'

import { DropdownSelector } from 'components/Dropdown-Selector/DropdownSelector'
import { stateName as states, countyName as counties } from 'data/state-county'
import { Location } from 'assets/svg'
import clsx from 'clsx'

export type InputLocationProps = {
  header?: string
  className?: string
  county: string
  setCounty: (value: string) => void
  state: string
  setState: (value: string) => void
}

export const InputLocation: React.FC<InputLocationProps> = ({
  county,
  setCounty,
  state,
  setState,
  ...props
}) => {
  const [countyList, setCountyList] = useState([] as string[])

  useEffect(() => {
    counties[state]?.length === 1 ? setCountyList([]) : setCountyList(counties[state])
    // counties[state]?.length > 1 && setCounty('County')
  }, [state, setCounty])

  return (
    <div className={clsx('w-full bg-gray-100 rounded-xl shadow-lg p-2', props.className)}>
      <div className="flex flex-row items-center justify-between w-full gap-4">
        <div className="mx-1.5 flex flex-row items-center flex-grow-0">
          <Location className="w-6 h-6 mr-4" />
          <div className="font-semibold text-gray-700">Location</div>
        </div>
        <div className="min-w-sm flex flex-row w-2/3 gap-2">
          <DropdownSelector
            isIntegration={true}
            options={states}
            placeholder={'State'}
            onSelect={setState}
            value={state}
            autofocus
          />
          <DropdownSelector
            isIntegration={true}
            options={countyList}
            placeholder={'County'}
            onSelect={setCounty}
            value={county}
          />
        </div>
      </div>
    </div>
  )
}
