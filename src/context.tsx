import { StepStatus } from 'components/Navigation/Navigation'
import { Context, createContext, Dispatch, useReducer } from 'react'
export interface AppState {
  progress: { safeHours: number; targetHours: number; targetOccupancy: number }
  userInputs: {
    ceilingHeight: number
    roomArea: number
    ageGroups: number[]
    vocalActivity: number[]
    physicalActivity: number[]
    maskTypes: number[]
    location: { state: string; county: string }
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
    ageGroups: [],
    vocalActivity: [],
    physicalActivity: [],
    maskTypes: [],
    location: { state: 'State', county: 'County' },
  },

  stepStatus: {
    '/target-occupancy': { complete: false },
    '/location': { complete: false },
    '/type-of-space': { complete: false },
    '/space-dimensions': { complete: false },
    // '/ceiling-height': { complete: false },
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
  | 'setAgeGroups'
  | 'setVocalActivity'
  | 'setPhysicalActivity'
  | 'setMaskTypes'
  | 'setLocation'

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
    case 'setAgeGroups':
      state.userInputs.ageGroups = action.payload.value
      console.log(action.payload)
      return { ...state }
    case 'setVocalActivity':
      state.userInputs.vocalActivity = action.payload.value
      return { ...state }
    case 'setPhysicalActivity':
      state.userInputs.physicalActivity = action.payload.value
      return { ...state }
    case 'setMaskTypes':
      state.userInputs.maskTypes = action.payload.value
      return { ...state }
    case 'setLocation':
      console.log(action.payload)
      state.userInputs.location = action.payload
      return { ...state }
    default:
      throw new Error(`There is no action called '${action.type}'`)
  }
}

export const AppContext = createContext(([initialState] as unknown) as AppContextType)
export const useContextReducer = () => useReducer(contextReducer, initialState)
