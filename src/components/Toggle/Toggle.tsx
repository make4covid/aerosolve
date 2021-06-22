import clsx from 'clsx'
import tw, { styled } from 'twin.macro'

export type ToggleProps = {
  options: string[]
  selected: string
  onSelect: (selection: string) => void
}

const Option = styled.div(({ selected }: { selected: boolean }) => [
  selected ? tw`text-white` : tw`text-gray-400`,
  tw`relative w-1/2 text-center cursor-pointer`,
])

export const Toggle: React.FC<ToggleProps> = ({ options, selected, onSelect }) => {
  return (
    <div className="box-border relative flex flex-row items-center h-8 p-1 text-xs font-semibold border-2 border-gray-400 rounded-full w-44 justify-evenly">
      <div
        style={{ paddingTop: '0.1rem', paddingBottom: '0.1rem' }}
        className="absolute top-0 bottom-0 left-0 right-0 z-0 py-0.5"
      >
        <div
          style={{
            marginLeft: '0.1rem',
            marginRight: '0.1rem',
          }}
          className={clsx(
            selected === options[0] || 'float-right',
            'w-1/2 h-full bg-blue-500 rounded-full mx-0.5 transition-all duration-150'
          )}
        ></div>
      </div>
      {options.map((option) => (
        <Option selected={selected === option} onClick={() => onSelect(option)}>
          {option}
        </Option>
      ))}
    </div>
  )
}
