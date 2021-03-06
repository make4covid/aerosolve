import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { NavButton } from 'components/NavButton/NavButton'
import { steps } from 'data'

export interface PageFooterProps {
  nextStepLabel?: string
  nextStepRoute?: string
  lastStepLabel?: string
  lastStepRoute?: string
  className?: string
}

// const InformationButton = () => {
//   return (
//     <button className="hover:shadow-md hover:bg-yellow-400 h-8 transition duration-200 ease-in-out bg-yellow-300 rounded-full cursor-pointer">
//       <div className="flex flex-row px-4 py-1">
//         <p className="flex-1 font-serif italic font-bold">i</p>
//         <p className="flex-1 ml-3 text-gray-800">Information</p>
//       </div>
//     </button>
//   )
// }

export const PageFooter: React.FC<PageFooterProps> = (props) => {
  const history = useHistory()
  const location = useLocation()

  const thisStepIndex = (): number => {
    return steps.findIndex((step) => {
      return step.route === location.pathname
    })
  }

  const [stepIndex, setStepIndex] = useState(thisStepIndex)
  useEffect(() => setStepIndex(thisStepIndex()), [location])

  return location.pathname === '/information' ? (
    <></>
  ) : (
    <div className={clsx(props.className, 'flex flex-row items-center justify-between')}>
      <div className="w-max flex flex-row items-center">
        {stepIndex > 0 && (
          <NavButton
            direction="last"
            label={steps[stepIndex - 1].title}
            onClick={() => history.push(steps[stepIndex - 1].route)}
            className="mr-6"
          />
        )}
        {stepIndex === -1 && (
          <Link to={steps[steps.length - 1].route}>
            <NavButton
              direction="last"
              label={steps[steps.length - 1].title}
              onClick={() => {}}
            ></NavButton>
          </Link>
        )}
        {/* <InformationButton /> */}
      </div>
      {stepIndex < steps.length - 1 && stepIndex >= 0 && (
        <NavButton
          direction="next"
          label={steps[stepIndex + 1].title}
          onClick={() => history.push(steps[stepIndex + 1].route)}
        ></NavButton>
      )}
      {stepIndex === steps.length - 1 && (
        <Link to="/recommendations">
          <NavButton direction="next" label="See Recommendations" onClick={() => {}}></NavButton>
        </Link>
      )}
    </div>
  )
}
