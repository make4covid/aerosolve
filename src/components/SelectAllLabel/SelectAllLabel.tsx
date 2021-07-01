import { CursorClick } from 'assets/svg'

export const SelectAllLabel: React.FC<{}> = () => {
  return (
    <div className="relative inline-block mb-4 text-gray-600">
      <p className="inline-block text-sm">Please select all that apply.</p>
      <CursorClick className="inline-block w-4 h-4 ml-2 fill-current" />
    </div>
  )
}
