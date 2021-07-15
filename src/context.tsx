import { StepStatus } from 'components/Navigation/Navigation'
import {
  calcAgeFactor,
  calcBreathingRate,
  calcMaskEff,
  calcMaskFit,
  calcPercentImmune,
  calcRespiratoryActivity,
} from 'model/calculations'
import { Context, createContext, Dispatch, useReducer } from 'react'

export type VaccinationData = {
  percent: number
  total: number
  risk: 'Baseline' | 'Average' | 'Above Average' | 'Below Average'
}
export interface AppState {
  progress: { safeHours: number; targetHours: number; targetOccupancy: number }
  userInputs: {
    ceilingHeight: number
    roomArea: number
    ageGroups: number[]
    vocalActivity: number[]
    physicalActivity: number[]
    maskTypes: number[]
    maskFit: number[]
    location: { state: string; county: string }
  }
  model: {
    nOfPeople: number
    sr_age_factor: number
    sr_strain_factor: number
    pim: number
    floor_area: number
    exp_time: number
    mean_ceiling_height: number
    air_exchange_rate: number
    recirc_rate?: number
    exhaled_air_inf: number
    def_aerosol_radius: number
    merv: number
    breathing_flow_rate: number
    mask_eff: number
    mask_fit: number
    relative_humidity: number
  }
  vaccinations: {
    country?: VaccinationData
    state?: VaccinationData
    county?: VaccinationData
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
    targetHours: 10,
    targetOccupancy: 15,
  },
  userInputs: {
    ceilingHeight: 12,
    roomArea: 1000,
    ageGroups: [1],
    vocalActivity: [1],
    physicalActivity: [1],
    maskTypes: [0],
    maskFit: [1],
    location: { state: 'State', county: 'County' },
  },
  model: {
    nOfPeople: 20,
    exp_time: 20,
    sr_age_factor: 0.68,
    sr_strain_factor: 1,
    pim: 0.487,
    floor_area: 1000,
    mean_ceiling_height: 12,
    air_exchange_rate: 9,
    recirc_rate: 1,
    exhaled_air_inf: 2.04,
    def_aerosol_radius: 2,
    merv: 6,
    breathing_flow_rate: 0.29,
    mask_eff: 0.5,
    mask_fit: 0.35,
    relative_humidity: 0.6,
  },
  vaccinations: {
    country: { percent: 48.8, total: 160126516, risk: 'Baseline' },
    // state: { percent: 0, total: 0, risk: 'Average' },
    // county: { percent: 0, total: 0, risk: 'Average' },
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
  | 'setMaskFit'
  | 'setLocation'
  | 'setVaccinationData'
  | 'setSafeRecommendations'

export const contextReducer = (state: AppState, action: { type: Actions; payload: any }) => {
  switch (action.type) {
    case 'setStepCompleted':
      state.stepStatus[action.payload.step as string].complete = true
      return { ...state }
    case 'setTargetHours':
      state.progress.targetHours = action.payload.value
      state.model.exp_time = action.payload.value
      return { ...state }
    case 'setTargetOccupancy':
      state.progress.targetOccupancy = action.payload.value
      state.model.nOfPeople = action.payload.value
      return { ...state }
    case 'setCeilingHeight':
      state.userInputs.ceilingHeight = action.payload.value
      state.model.mean_ceiling_height = action.payload.value
      return { ...state }
    case 'setRoomArea':
      state.userInputs.roomArea = action.payload.value
      state.model.floor_area = action.payload.value
      return { ...state }
    case 'setAgeGroups':
      state.userInputs.ageGroups = action.payload.value
      state.model.sr_age_factor = calcAgeFactor(action.payload.value)
      return { ...state }
    case 'setVocalActivity':
      state.userInputs.vocalActivity = action.payload.value
      state.model.exhaled_air_inf = calcRespiratoryActivity(
        state.userInputs.physicalActivity,
        state.userInputs.vocalActivity
      )
      return { ...state }
    case 'setPhysicalActivity':
      state.userInputs.physicalActivity = action.payload.value
      state.model.breathing_flow_rate = calcBreathingRate(
        state.userInputs.physicalActivity,
        state.userInputs.vocalActivity
      )
      return { ...state }
    case 'setMaskTypes':
      state.userInputs.maskTypes = action.payload.value
      state.model.mask_eff = calcMaskEff(action.payload.value)
      return { ...state }
    case 'setMaskFit':
      state.userInputs.maskFit = action.payload.value
      state.model.mask_fit = calcMaskFit(action.payload.value)
      return { ...state }
    case 'setLocation':
      state.userInputs.location = action.payload
      return { ...state }
    case 'setVaccinationData':
      state.vaccinations = { ...state.vaccinations, ...action.payload }
      state.model.pim = calcPercentImmune(state.vaccinations)
      return { ...state }
    case 'setSafeRecommendations':
      state.progress.safeHours = action.payload.safeHours
      return { ...state }
    default:
      throw new Error(`There is no action called '${action.type}'`)
  }
}

export const AppContext = createContext(([initialState] as unknown) as AppContextType)
export const useContextReducer = () => useReducer(contextReducer, initialState)
