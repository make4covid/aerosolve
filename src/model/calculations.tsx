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
  const values = [0.1, 0.4, 0.7, 0.95]
  return values[maskFit[0]]
}

export const calcBreathingRate = (physicalActivity: number[], vocalActivity: number[]) => {
  const exerciseWeights = [0.29, 0.32, 0.81, 1.94]
  const vocalWeights = [0, 0, 0, 0.59]

  const exerciseBreathingRate =
    physicalActivity.length > 0
      ? physicalActivity.reduce((accumulator, activity) => {
          return accumulator + exerciseWeights[activity]
        }, 0) / physicalActivity.length
      : 0.29

  const vocalBreathingRate =
    vocalActivity.length > 0
      ? vocalActivity.reduce((accumulator, activity) => {
          return accumulator + vocalWeights[activity]
        }, 0) / vocalActivity.length
      : 0

  // If there's singing in the space, give it a value

  // If the singing value is greater than the physical activity value, use it instead
  return Math.max(vocalBreathingRate, exerciseBreathingRate)
}

export const calcRespiratoryActivity = (physicalActivity: number[], vocalActivity: number[]) => {
  const physicalWeights = [0.03, 0.12, 0.12, 0.25]
  const vocalWeights = [0.82, 2.04, 4.02, 27.47]

  const physicalAvg =
    physicalActivity.length > 0
      ? physicalActivity.reduce((accumulator, activity) => {
          return accumulator + physicalWeights[activity]
        }, 0) / physicalActivity.length
      : 0.03

  const vocalAvg =
    vocalActivity.length > 0
      ? vocalActivity.reduce((accumulator, activity) => {
          return accumulator + vocalWeights[activity]
        }, 0) / vocalActivity.length
      : 0

  return Math.max(vocalAvg, physicalAvg)
}

export const calcVentilation = (ventilationSelection: number) => {
  const values = [0.1, 2.5, 5, 7.5, 10]
  return values[ventilationSelection]
}
export const calcFiltration = (filtrationSelection: number) => {
  const values = [1, 6, 10, 14, 16]
  return values[filtrationSelection]
}
export const calcRecirculation = (recircSelection: number) => {
  const values = [0, 1, 3, 6, 10]
  return values[recircSelection]
}
export const calcHumidity = (humiditySelection: number) => {
  const values = [0, 0.3, 0.6, 0.8, 0.95]
  return values[humiditySelection]
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
