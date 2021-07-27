import { steps } from 'data'

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

export const Information: React.FC<{}> = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Aerosolve Information</h1>
      {steps.map((step) => {
        return (
          <div className="my-6" key={step.title}>
            <header className="mb-2 text-xl font-semibold">{step.title}</header>
            <section>{loremIpsum}</section>
          </div>
        )
      })}
    </div>
  )
}
