import { VaccinationData } from 'context'

export const calcAgeFactor = (ageGroups: number[]) => {
  // Get user inputs for age, output weighted average between 0 and 1
  console.log(ageGroups)
  const weights = [0.23, 0.68, 1.0]
  const sum = ageGroups.reduce((accumulator, group) => {
    return accumulator + weights[group]
  }, 0)

  return ageGroups.length === 0 ? 0.68 : sum / ageGroups.length
}

export const calcMaskFit = (maskTypes: number[]) => {
  return 0.5
}

export const calcPercentImmune = (vaccinations: {
  country?: VaccinationData
  state?: VaccinationData
  county?: VaccinationData
}) => {
  const pim =
    vaccinations.county?.percent ||
    vaccinations.state?.percent ||
    vaccinations.country?.percent ||
    0
  return pim / 100
}
