import { VaccinationData } from 'context'

export const calcAgeFactor = (ageGroups: number[]) => {
  const weights = [0.23, 0.68, 1.0]
  const sum = ageGroups.reduce((accumulator, group) => {
    return accumulator + weights[group]
  }, 0)

  return ageGroups.length === 0 ? 0.68 : sum / ageGroups.length
}

export const calcMaskEff = (maskTypes: number[]) => {
  const weights = [0.5, 0.7, 0.9, 0.95]
  const sum = maskTypes.reduce((accumulator, maskType) => {
    return accumulator + weights[maskType]
  }, 0)

  return maskTypes.length === 0 ? 0 : sum / maskTypes.length
}

export const calcMaskFit = (maskFit: number[]) => {
  // maskTypes is stored as a one item array
  const values = [0.1, 0.4, 0.65, 0.95]
  return values[maskFit[0]]
}

export const calcBreathingRate = (physicalActivity: number[], vocalActivity: number[]) => {
  // singing = 0.59

  const defaultValue = 0.29
  const weights = [0.29, 0.32, 0.81, 1.94]

  const breathingRate =
    physicalActivity.length > 0
      ? physicalActivity.reduce((accumulator, activity) => {
          return accumulator + weights[activity]
        }, 0) / physicalActivity.length
      : defaultValue

  // If there's singing in the space, give it a value
  const singingValue = vocalActivity.includes(3) ? 0.59 : 0

  // If the singing value is greater than the physical activity value, use it instead
  return Math.max(breathingRate, singingValue)
}

export const calcRespiratoryActivity = (physicalActivity: number[], vocalActivity: number[]) => {
  // Based on physical activity if there's no vocal activity
  // Based on vocal activity otherwise
  const defaultValue = 0.12

  const physicalWeights = [0.03, 0.12, 0.12, 0.25]
  const vocalWeights = [0.82, 2.04, 4.02, 27.47]

  const physicalAvg =
    physicalActivity.length > 0
      ? physicalActivity.reduce((accumulator, activity) => {
          return accumulator + physicalWeights[activity]
        }) / physicalActivity.length
      : undefined

  const vocalAvg =
    vocalActivity.length > 0
      ? vocalActivity.reduce((accumulator, activity) => {
          return accumulator + vocalWeights[activity]
        }) / vocalActivity.length
      : undefined

  return vocalAvg ? vocalAvg : physicalAvg ? physicalAvg : defaultValue
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
