import React, { ChangeEvent, useEffect, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components/Button/Button'
import { ChevronUpDown } from 'assets/svg'
import { useRef } from 'react'

export interface DropdownSelectorProps {
  options: string[]
  placeholder: string
  onSelect?: (value: any) => void
  isIntegration: boolean
  className?: string
  onClick?: () => void
  value: string
  autofocus?: boolean
}

export const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  autofocus = false,
  options = [],
  ...props
}) => {
  const [focus, setFocus] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <div
      // style={{ minWidth: `${(props.value?.length || 0) + 1}ch` }}
      className={clsx(
        'flex flex-row-reverse w-full border-2 items-center border-gray-300 rounded-lg transition-colors duration-100 ',
        options.length === 0 ? 'bg-gray-100 cursor-default' : 'bg-white',
        focus && 'border-blue-500'
      )}
    >
      <ChevronUpDown className="mr-1.5 -ml-8 justify-self-end w-5 h-5 text-gray-600 fill-current" />
      <select
        autoFocus
        disabled={options.length === 0}
        ref={selectRef}
        name={props.placeholder}
        id={`${props.placeholder}-select`}
        className={clsx(
          'inline-block w-full p-1 m-0 text-left text-gray-500 bg-transparent border-0 outline-none appearance-none justify-self-start',
          options.length === 0 ? 'cursor-default' : 'cursor-pointer'
        )}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={props.value}
        onChange={(e) => {
          props.onSelect && props.onSelect(e.target.value)
        }}
      >
        <option value={props.placeholder} disabled selected hidden>
          {props.placeholder}
        </option>
        {options.sort().map((option) => (
          <option value={option} className="bg-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export const DropdownSelector2: React.FC<DropdownSelectorProps> = (props) => {
  const [elementBG, setElementBG] = useState(-1)
  const [arrowDirection, setArrowDirection] = useState(true) //True means up | False means down
  const [input, setInput] = useState('')
  const [list, setList] = useState(props.options)
  function handleToggle(e: any) {
    e.preventDefault()
    setArrowDirection(!arrowDirection)
  }
  function handleClickElement(item: string, index: number) {
    setElementBG(index)
    setInput(item)
    setArrowDirection(!arrowDirection)
    if (props.isIntegration) {
      // @ts-ignore
      props.onSelect(item)
    }
  }
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (input.length == 0) {
      setList(props.options)
    } else {
      let newList = []
      for (let i = 0; i < props.options.length; i++) {
        if (props.options[i].includes(input)) {
          newList.push(props.options[i])
        }
      }
      setList(newList)
    }
  }, [input])

  useEffect(() => {
    setList(props.options)
  }, [props.options])

  return (
    <div className={clsx(`w-full h-5/6  shadow-lg`, props.className)}>
      <div
        className={clsx(
          `flex flex-row h-10 border-3  border-blue-500 rounded-sm bg-white`,
          !arrowDirection && 'border-b-0',
          arrowDirection && 'rounded-lg'
        )}
      >
        <input
          type="text"
          placeholder={props.placeholder}
          className={'focus:outline-none  w-3/4 h-full text-gray-400 lg:text-lg md:text-md  ml-2'}
          value={input}
          onChange={(e) => search(e)}
        />

        <div className={'w-1/5 h-full mt-1 float-right'} onClick={handleToggle}>
          <Button direction={arrowDirection ? 0 : 1} />
        </div>
      </div>

      <div
        className={clsx(
          ` overflow-y-scroll scrollbar-width-thin border-t-0 border-blue-500 rounded-b-lg bg-white`,
          arrowDirection && 'w-0 h-0 border-0',
          !arrowDirection && 'w-full h-48 border-3'
        )}
      >
        <br />
        <ul>
          {list != undefined &&
            list.map((item: any, index: any) => {
              return (
                <li
                  onClick={() => handleClickElement(item, index)}
                  className={clsx(
                    'px-2 cursor-pointer lg:text-lg md:text-md font-medium',
                    elementBG == index && 'text-blue-500',
                    elementBG != index && 'text-gray-500'
                  )}
                  key={index}
                >
                  {' '}
                  {item}{' '}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}
