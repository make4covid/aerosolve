import { NavGroup } from 'components/Navigation/Navigation'
import React from 'react'
import { NavigationStep } from './NavigationStep'

export const NavigationGroup: React.FC<NavGroup> = (props) => {
  // const listItems = props.steps.map((step, index) => (
  //   <React.Fragment key={step.title}>
  //     <NavigationStep {...step} style={index === 0 ? { borderTop: 0 } : {}} />
  //   </React.Fragment>
  // ))

  return (
    <div className="my-4 sidebarGroup">
      <h1 className="flex mx-2 my-1 font-sans text-sm font-bold text-center text-gray-500 sidebarGroupHeader">
        {props.header}
      </h1>
      <div className="w-full overflow-hidden rounded-md">{props.children}</div>
    </div>
  )
}
