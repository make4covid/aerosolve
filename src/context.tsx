import { StepStatus } from 'components/Navigation/Navigation'
import { createContext } from 'react'
export interface AppState {
  progress: { safeHours: number; targetHours: number; targetOccupancy: number }
  stepStatus: StepStatus
}

const initialState: AppState = {
  progress: {
    safeHours: 0,
    targetHours: 0,
    targetOccupancy: 0,
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

export enum Actions {
  setStepCompleted,
}

export const contextReducer = (state: AppState, action: { type: Actions; payload: any }) => {
  switch (action.type) {
    case Actions.setStepCompleted:
      state.stepStatus[action.payload.step as string].complete = true
      return { ...state }
    default:
      throw new Error(`There is no action called '${action.type}'`)
  }
}

export const AppContext = createContext(initialState)
