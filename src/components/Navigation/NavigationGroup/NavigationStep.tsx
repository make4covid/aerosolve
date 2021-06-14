import React, { CSSProperties, useContext } from 'react'
import { ReactComponent as Checkmark } from 'assets/icons/checkmark.svg'
import { NavGroupStep } from 'components/Navigation/Navigation'

type NavStepProps = NavGroupStep & {
  complete: boolean
  active: boolean
  onClick: () => void
  style?: CSSProperties
}

export const NavigationStep: React.FC<NavStepProps> = (props) => {
  let statusStyles = props.active
    ? ' text-white bg-blue-600 cursor-default '
    : ' text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer '
  props.complete && (statusStyles += ' text-blue-600 hover:bg-blue-100 cursor-pointer ')

  return (
    <div
      style={props.style}
      className={
        'font-sans font-normal relative flex flex-row items-center justify-between px-4 py-2 bg-white transition duration-200 border-t cursor-pointer' +
        statusStyles
      }
    >
      <div>{props.title}</div>
      {props.complete && <Checkmark className={'fill-current'} height="24" width="24" />}
      {!props.complete && <Checkmark height="24" width="24" />}
    </div>
  )
}
