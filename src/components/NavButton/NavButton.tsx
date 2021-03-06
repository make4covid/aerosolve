import { ReactComponent as LeftArrow } from 'assets/svg/arrow-circle-left.svg'
import { ReactComponent as RightArrow } from 'assets/svg/arrow-circle-right.svg'
import clsx from 'clsx'
import { MouseEventHandler } from 'react'

export type NavButtonProps = {
  direction: 'last' | 'next'
  label?: string
  onClick: MouseEventHandler
  className?: string
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const Arrow = props.direction === 'last' ? LeftArrow : RightArrow
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        'transition-all duration-200 outline-none focus:outline-none focus:ring-4 ring-gray-300 text-purple-700 bg-white border-purple-700 hover:bg-purple-700 p-0.5 rounded-full border-2 hover:text-white',
        props.className
      )}
    >
      <div
        className={clsx(
          'flex flex-row items-center  ',
          props.direction === 'last' && 'flex-row-reverse'
        )}
      >
        {props.label && (
          <div className={clsx(props.direction === 'last' ? 'pl-3 pr-4' : 'pr-3 pl-4')}>
            {props.label}
          </div>
        )}
        <Arrow className="w-8 h-8 fill-current" />
      </div>
    </button>
  )
}
