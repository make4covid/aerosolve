import { ReactComponent as LeftArrow } from 'assets/icons/arrow-circle-left.svg'
import { ReactComponent as RightArrow } from 'assets/icons/arrow-circle-right.svg'
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
        'transition-colors duration-300 outline-none focus:outline-none text-cyan-600 hover:text-cyan-500',
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
          <div className={clsx(props.direction === 'last' ? 'pl-3' : 'pr-3')}>{props.label}</div>
        )}
        <Arrow className="w-8 h-8 fill-current" />
      </div>
    </button>
  )
}
