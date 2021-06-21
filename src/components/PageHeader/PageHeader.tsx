import { ProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
import { AppContext } from 'context'
import React, { useContext } from 'react'

export type PageHeaderProps = {
  title: string
  prompt: string
  description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { progress } = useContext(AppContext)

  return (
    <div
      style={{ gridTemplateColumns: '3fr 2fr', gridTemplateRows: 'max-content max-content' }}
      className="grid w-full grid-rows-2 divide-x-2 divide-y-2 divide-gray-400 gap-y-4"
    >
      <div>
        <h1 className="px-5 text-3xl font-bold">{props.title}</h1>
      </div>
      <div style={{ borderTop: 0 }}>
        <ProgressIndicator
          className="mx-4"
          value={progress.safeHours}
          outOf={progress.targetHours}
          people={progress.targetOccupancy}
        ></ProgressIndicator>
      </div>
      <div>
        <p className="px-4 my-2 text-lg font-medium text-gray-500">{props.prompt}</p>
      </div>
      <div>
        {props.description && (
          <p className="mx-4 my-3 text-sm text-gray-600">{props.description}</p>
        )}
      </div>
    </div>
  )
}

// import { ProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
// import { AppContext } from 'context'
// import React, { CSSProperties, useContext } from 'react'

// export type PageHeaderProps = {
//   header?: string
//   title: string
//   question?: string
//   recommendation?: string
//   hours: number
//   people: number
//   description?: string
//   prompt: string
//   style?: CSSProperties
// }

// export const PageHeader: React.FC<PageHeaderProps> = (props) => {
//   const { progress } = useContext(AppContext)

//   return (
//     <div className="grid grid-rows-2 gap-4 divide-y-2 divide-gray-400 gap-x-2">
//       <div className="grid grid-cols-11 divide-x-2 divide-gray-400">
//         <div className="col-span-6">
//           <p className="text-3xl font-bold">{props.title}</p>
//         </div>
//         <div className="col-span-5">
//           <div className="grid grid-cols-2">
//             <div className="col-span-1">
//               <div style={{ borderTop: 0 }}>
//                 <ProgressIndicator
//                   className="mx-4"
//                   value={progress.safeHours}
//                   outOf={progress.targetHours}
//                   people={progress.targetOccupancy}
//                 ></ProgressIndicator>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-11 border-l-2 divide-x-2 divide-gray-400">
//         <div className="col-span-6">
//           <p className="px-3 text-base text-2xl font-medium text-gray-500">{props.question}</p>
//         </div>
//         <div className="col-span-5">
//           <p>{props.description}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
