import { VaccinationData } from 'context'

export const calcAgeFactor = (ageGroups: number[]) => {
  // Get user inputs for age, output weighted average between 0 and 1
  return 0.5
}

export const calcMaskFit = (maskTypes: number[]) => {
  return 0.5
}

export const calcPercentImmune = (vaccinations: {
  country?: VaccinationData
  state?: VaccinationData
  county?: VaccinationData
}) =>
  vaccinations.county?.percent || vaccinations.state?.percent || vaccinations.country?.percent || 0
