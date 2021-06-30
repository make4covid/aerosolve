import React from 'react'
import clsx from 'clsx'
import { RiskChip } from 'components/RiskChip/RiskChip'

export interface SelectionOptions {
  title: string
  description: string
  risk?: 'Low' | 'Medium' | 'High'
  img?: string
}
export interface SelectionCardProps {
  /**
   * Is this item selected?
   */
  selected?: boolean
  /**
   * Use a column orientation?
   */
  column?: boolean
  // /**
  //  * Optional click handler
  //  */
  onClick?: (e: any) => void
  className?: string
}

/**
 * UI Box for selectable blocks containing information and images
 */
export const SelectionCard: React.FC<SelectionCardProps & SelectionOptions> = ({
  selected = false,
  column = false,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'rounded-xl w-full p-3 cursor-pointer transition duration-200 flex justify-between hover:shadow-lg ',
        selected && 'bg-blue-200',
        !selected && 'bg-gray-100 border-transparent',
        column && 'flex-col',
        !column && 'flex-row'
      )}
      {...props}
    >
      <div>
        <div className="flex flex-col justify-between">
          <div
            className={clsx(
              'font-bold text-lg transition duration-200  whitespace-pre-wrap text-gray-700 mb-2 leading-5'
            )}
          >
            {props.title}
            <br />
            <span className="text-base font-normal">{props.description}</span>
          </div>
          {props.risk && <RiskChip risk={props.risk} className="bg-gray-100" />}
        </div>
      </div>
      {props.img && (
        <div
          className={clsx(
            'overflow-hidden rounded-lg transition duration-200 shadow-lg',
            !column && 'w-1/2',
            column && 'w-full mt-4 max-h-52'
          )}
        >
          <img
            src={props.img}
            alt=""
            className={clsx(
              'w-full h-full object-cover object-center mix-blend-multiply opacity-90'
            )}
          />
        </div>
      )}
    </div>
  )
}
