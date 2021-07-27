import React, { CSSProperties } from 'react'
import { Person } from 'assets/svg'
import clsx from 'clsx'
import tw from 'twin.macro'

export type NumberOfOccupantsProps = {
  header?: string
  value: number
  style?: CSSProperties
  className?: string
  lineBreak?: number
  onChange: (value: number) => void
}

const GridCell = tw.div`p-0.5 w-full h-full cursor-pointer`

export const NumberOfOccupants: React.FC<NumberOfOccupantsProps> = ({
  lineBreak = 5,
  ...props
}) => {
  const rows = Math.min(Math.max(Math.floor(Math.sqrt(props.value * 0.75)), 5), 20)
  const columns = Math.round(rows * 2.3)

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      className={clsx('relative h-full grid', props.className)}
    >
      {Array(rows * columns)
        .fill(0)
        .map((_, index) => {
          return (
            <GridCell
              key={index}
              onClick={() => {
                props.onChange(index + 1)
              }}
            >
              <Person
                className={clsx(
                  props.value > index ? 'text-blue-500' : 'text-white',
                  'h-full fill-current m-auto transition-colors duration-700 delay-50'
                )}
              ></Person>
            </GridCell>
          )
        })}
    </div>
  )
}
