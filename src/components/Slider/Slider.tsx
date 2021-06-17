// TODO: Set up singular units
// TODO: Add "click to set value" feature
// TODO: Add custom "tick mark" option

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { ValueIndicator } from 'components/ValueIndicator/ValueIndicator'

export type SliderProps = {
  min: number
  max: number
  interval: number
  value: number
  units?: string
  onChange: (value: number) => void
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 10,
  interval = 1,
  value = 5,
  units = 'hours',
  onChange,
}) => {
  const [dragging, setDragging] = useState(false)
  const [dragValue, setDragValue] = useState(null as number | null)
  const [indicatorPosition, setIndicatorPosition] = useState(
    `${(100 * (value - min)) / (max - min)}%`
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

  useEffect(() => {
    !dragging && setIndicatorPosition(`${(100 * (value - min)) / (max - min)}%`)
  }, [value, dragging])

  const tickArray = []
  for (let i = min; i <= max; i += interval) tickArray.push(i)

  const tickMarks: React.ReactFragment = tickArray.map((v, i) => (
    <div
      key={`${i}-${v}`}
      className={clsx(
        'w-4 h-4 rounded-full',
        dragValue && dragValue < v && 'bg-white transition-none',
        dragValue && dragValue >= v && 'bg-blue-400',
        dragValue || (value < v && 'bg-white transition-none'),
        dragValue || (value >= v && 'bg-blue-400')
      )}
    />
  ))

  return (
    <div
      ref={containerRef}
      style={{ cursor: dragging ? 'grabbing' : 'auto' }}
      className="flex flex-col w-full pb-5 border-blue-400 "
      onMouseMove={(e): void => {
        const w = (containerRef.current as HTMLDivElement).offsetWidth
        console.log(e.clientX)
        const dragPercent = Math.max(Math.min((e.clientX - 56) / w, 1), 0)
        dragging && setIndicatorPosition(`${dragPercent * 100}%`)
        dragging && onChange(Math.round((max - min) * dragPercent + min))
        dragging && setDragValue(Math.floor((max - min) * dragPercent + min))
      }}
    >
      <div className="relative w-full h-16 mb-2">
        <div
          ref={transitionRefs[0]}
          style={{ left: indicatorPosition }}
          className="absolute transition-all duration-200 transform -translate-x-1/2"
        >
          <ValueIndicator value={value} units={units} className="static"></ValueIndicator>
        </div>
      </div>
      <div className="relative filter drop-shadow-md">
        <div className="absolute top-0 w-full h-2 bg-white rounded-full"></div>
        <div
          ref={transitionRefs[1]}
          style={{ width: indicatorPosition }}
          className="absolute top-0 h-2 transition-all duration-200 bg-blue-400 rounded-full"
        ></div>
        <div
          style={{ width: 'calc(100% + 1rem)' }}
          className="relative flex flex-row items-center justify-between h-2 -mx-2 overflow-visible rounded-full "
        >
          {tickMarks}
        </div>
        <div
          ref={transitionRefs[2]}
          style={{
            left: indicatorPosition,
            cursor: dragging ? 'grabbing' : 'grab',
          }}
          className="absolute w-8 h-8 -mt-1 transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full shadow-md"
          onMouseDown={() => {
            startDrag()
            window.addEventListener('mouseup', handleMouseup)
          }}
        ></div>
      </div>
    </div>
  )
}
