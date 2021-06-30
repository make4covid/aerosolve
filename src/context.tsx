import { StepStatus } from 'components/Navigation/Navigation'
import { Context, createContext, Dispatch, useReducer } from 'react'
export interface AppState {
  progress: { safeHours: number; targetHours: number; targetOccupancy: number }
  userInputs: {
    ceilingHeight: number
    roomArea: number
  }
  stepStatus: StepStatus
}

type AppContextType = [
  AppState,
  Dispatch<{
    type: Actions
    payload: any
  }>
]

const initialState: AppState = {
  progress: {
    safeHours: 2,
    targetHours: 6,
    targetOccupancy: 20,
  },
  userInputs: {
    ceilingHeight: 8,
    roomArea: 500,
  },

  stepStatus: {
    '/target-occupancy': { complete: false },
    '/location': { complete: false },
    '/type-of-space': { complete: false },
    '/area-of-space': { complete: false },
    '/ceiling-height': { complete: false },
    '/occupant-ages': { complete: false },
    '/vocal-activity': { complete: false },
    '/physical-activity': { complete: false },
    '/types-of-masks': { complete: false },
    '/mask-fit': { complete: false },
    '/ventilation-filtration': { complete: false },
  },
}

export { initialState }

export type Actions =
  | 'setStepCompleted'
  | 'setTargetHours'
  | 'setTargetOccupancy'
  | 'setCeilingHeight'
  | 'setRoomArea'

export const contextReducer = (state: AppState, action: { type: Actions; payload: any }) => {
  switch (action.type) {
    case 'setStepCompleted':
      state.stepStatus[action.payload.step as string].complete = true
      return { ...state }
    case 'setTargetHours':
      state.progress.targetHours = action.payload.value
      return { ...state }
    case 'setTargetOccupancy':
      state.progress.targetOccupancy = action.payload.value
      return { ...state }
    case 'setCeilingHeight':
      state.userInputs.ceilingHeight = action.payload.value
      return { ...state }
    case 'setRoomArea':
      state.userInputs.roomArea = action.payload.value
      return { ...state }
    default:
      throw new Error(`There is no action called '${action.type}'`)
  }
}

export const AppContext = createContext(([initialState] as unknown) as AppContextType)
export const useContextReducer = () => useReducer(contextReducer, initialState)
