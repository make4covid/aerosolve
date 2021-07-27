import clsx from 'clsx'
import { MouseEvent, RefObject, useEffect, useRef, useState } from 'react'
import { ValueIndicator } from 'components/ValueIndicator/ValueIndicator'

export type SliderProps = {
  min: number
  max: number
  interval: number
  value: number
  unitPrefix?: string
  unit?: string
  labelValues: boolean
  onChange: (value: number) => void
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 10,
  interval = 1,
  value = 5,
  unit = 'Hour',
  labelValues = false,
  onChange,
  unitPrefix,
}) => {
  const [dragging, setDragging] = useState(false)
  const [dragValue, setDragValue] = useState(null as number | null)
  const [indicatorPosition, setIndicatorPosition] = useState(
    `${Math.min((100 * (value - min)) / (max - min), 100)}%`
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const transitionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  const startDrag = () => {
    transitionRefs.forEach(({ current: ref }) => {
      ref!.style.transitionDuration = '0ms'
    })
    setDragging(true)
  }
  const endDrag = () => {
    transitionRefs.forEach(({ current: ref }) => {
      ref!.style.transitionDuration = ''
    })
    setDragValue(null)
    setDragging(false)
  }

  const handleMouseup = () => {
    endDrag()
    window.removeEventListener('mouseup', handleMouseup)
  }

  const mousePercentPosition = (ref: RefObject<HTMLDivElement>, e: MouseEvent) => {
    const bounds = ref.current!.getBoundingClientRect()
    const w = (ref.current as HTMLDivElement).offsetWidth
    const dragPercent = Math.max(Math.min((e.clientX - bounds.left) / w, 1), 0)
    return dragPercent
  }

  const valueFromPosition = (position: number) => (max - min) * position + min

  useEffect(() => {
    !dragging && setIndicatorPosition(`${Math.min((100 * (value - min)) / (max - min), 100)}%`)
  }, [value, dragging])

  const tickArray = []
  for (let i = min; i <= max; i += interval) tickArray.push(i)

  const tickMarks: React.ReactFragment = tickArray.map((v, i) => (
    <div
      onClick={(e) => {
        onChange(v)
        e.stopPropagation()
      }}
      key={`${i}-${v}`}
      className={clsx(
        'flex flex-col items-center cursor-pointer transition-colors duration-150 mt-7 w-4',
        dragValue && dragValue < v && 'text-gray-500',
        dragValue && dragValue >= v && 'text-blue-500',
        dragValue || (value < v && ' text-gray-500'),
        dragValue || (value >= v && 'text-blue-500')
      )}
    >
      <div
        className={clsx(
          'w-4 h-4 rounded-full cursor-pointer transition-colors duration-150 mb-2',
          dragValue && dragValue < v && 'bg-white',
          dragValue && dragValue >= v && 'bg-blue-500',
          dragValue || (value < v && 'bg-white'),
          dragValue || (value >= v && 'bg-blue-500')
        )}
      />
      <div className="filter drop-shadow-none overflow-visible text-sm text-center select-none">
        {v.toLocaleString()}
        {v >= max && v < value && '+'}
      </div>
    </div>
  ))

  return (
    <div
      ref={containerRef}
      style={{ cursor: dragging ? 'grabbing' : 'auto' }}
      className="mb-2.5 px-2.5 flex flex-col w-full pb-5 border-blue-500"
      onMouseMove={(e): void => {
        if (dragging) {
          const dragPercent = mousePercentPosition(containerRef, e)
          setIndicatorPosition(`${dragPercent * 100}%`)
          onChange(Math.round(valueFromPosition(dragPercent)))
          setDragValue(Math.floor(valueFromPosition(dragPercent)))
        }
      }}
    >
      <div className="relative w-full h-16 mb-2">
        <div
          ref={transitionRefs[0]}
          style={{ left: indicatorPosition }}
          className="absolute transition-all duration-200 transform -translate-x-1/2"
        >
          <ValueIndicator value={value} unitPrefix={unitPrefix} unit={unit}></ValueIndicator>
        </div>
      </div>
      <div
        className="filter drop-shadow-md relative cursor-pointer"
        onClick={(e) => {
          const position = mousePercentPosition(containerRef, e)
          onChange(Math.round(valueFromPosition(position)))
        }}
      >
        <div className="absolute top-0 w-full h-2 bg-white rounded-full"></div>
        <div
          ref={transitionRefs[1]}
          style={{ width: indicatorPosition }}
          className="absolute top-0 h-2 transition-all duration-200 bg-blue-500 rounded-full"
        ></div>
        <div
          style={{ width: 'calc(100% + 1rem)' }}
          className="relative flex flex-row items-center justify-between h-2 -mx-2 overflow-visible rounded-full"
        >
          {tickMarks}
        </div>
        <div
          ref={transitionRefs[2]}
          style={{
            left: indicatorPosition,
            cursor: dragging ? 'grabbing' : 'grab',
          }}
          className="absolute w-8 h-8 -mt-1 transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full shadow-md"
          onMouseDown={() => {
            startDrag()
            window.addEventListener('mouseup', handleMouseup)
          }}
        ></div>
      </div>
    </div>
  )
}
