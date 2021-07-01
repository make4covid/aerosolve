import React from 'react'
import clsx from 'clsx'
import { RiskChip } from 'components/RiskChip/RiskChip'

export interface SelectionOptions {
  title: string
  description?: string
  risk?: 'Low' | 'Medium' | 'High'
  img?: string
  imgFit?: string
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
  imgFit = 'cover',
  ...props
}) => {
  return (
    <div
      className={clsx(
        'rounded-xl w-full p-3 cursor-pointer transition duration-200 justify-between hover:shadow-lg ',
        selected && 'bg-blue-200',
        !selected && 'bg-gray-100 border-transparent',
        column && 'flex flex-col',
        !column && 'grid grid-rows-1 grid-cols-2'
      )}
      {...props}
    >
      <div>
        <div className="flex flex-col justify-between">
          <div
            className={clsx(
              'font-bold text-lg transition duration-200  whitespace-pre-wrap text-gray-700 mb-2 leading-5 mr-3'
            )}
          >
            {props.title}
            {props.description && (
              <div className="mt-1 text-sm font-light text-gray-600">{props.description}</div>
            )}
          </div>
          {props.risk && <RiskChip risk={props.risk} className="mt-1 bg-gray-100" />}
        </div>
      </div>
      {props.img && (
        <div
          className={clsx(
            'overflow-hidden rounded-lg transition duration-200 ',
            !column && '',
            column && 'w-full mt-4 max-h-52'
          )}
        >
          <img
            src={props.img}
            alt=""
            className={clsx(
              'w-full h-full object-center mix-blend-multiply opacity-90',
              `object-${imgFit}`
            )}
          />
        </div>
      )}
    </div>
  )
}
