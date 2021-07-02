// Todo build Jest __tests__ for service as well.
//
// When go to component, call the api, component receives new change and reflect to the component
import path from 'path'
import helpers from './helper'

export const CDCDataFetchWrapper = {
  getStateVaccineData,
  getCountyVaccineData,
  getStateCovidData,
  getStateCountyData,
}
//Main function
export function getStateCovidData(state: string, day: Date) {
  let yesterday = new Date(day)
  yesterday.setDate(yesterday.getDate() - 1)
  const url1 =
    'https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=' +
    yesterday.toISOString().split('T')[0] +
    '&state=' +
    state // Get Confirmed Covid Case , new case and  Get Deaths Covid Case

  // Recursive solution to get the latest data
  return new Promise(function (resolve, reject) {
    helpers
      .get(url1)
      .then((data) => {
        if (data.length == 0) {
          resolve(getStateCovidData(state, yesterday))
        } else {
          //Done here return result
          //console.log(data)
          resolve(data)
        }
      })
      .catch(failureCallback)
  })
  // Deduct day until the data is available
  //While loop run it and get the day
}

export function getStateCountyData(state: string, county: string, day: Date) {
  let yesterday = new Date(day)
  yesterday.setDate(yesterday.getDate() - 1)
  // const url = `${process.env.AerosolveURL}/county_stats`
  const url = `http://localhost:5000/county_stats`

  console.log(url)
  // Recursive solution to get the latest data
  return new Promise(function (resolve, reject) {
    helpers
      .post(url, { state: state, county: county })
      .then((data) => {
        if (data.length == 0) {
          resolve(getStateCountyData(state, county, yesterday))
        } else {
          //Done here return result
          //console.log(data)
          resolve(data)
        }
      })
      .catch(failureCallback)
  })
  // Deduct day until the data is available
  //While loop run it and get the day
}

function failureCallback(error: string) {
  console.error('Something wrong with the data source: ' + error)
}

export function getStateVaccineData(state: string, date: Date) {
  let yesterday = new Date(date)
  const url2 =
    'https://data.cdc.gov/resource/8xkx-amqh.json?date=' +
    yesterday.toISOString().split('T')[0] +
    '&' +
    'recip_state=' +
    state // # Get Vaccination Rate State

  return new Promise(function (resolve, reject) {
    helpers.get(url2).then((data) => {
      if (data.length == 0) {
        yesterday.setDate(yesterday.getDate() - 1)
        resolve(getStateVaccineData(state, yesterday))
      } else {
        resolve(aggregateVaccineData(data))
      }
    })
  })
}

export async function getCountyVaccineData(state: string, county: string) {
  const today = new Date()
  const previousDate = new Date()
  previousDate.setDate(today.getDate() - 10)

  const url = new URL('https://data.cdc.gov/resource/8xkx-amqh.json')
  url.searchParams.set(
    '$where',
    `date between '${previousDate.toISOString().split('T')[0]}' and '${
      today.toISOString().split('T')[0]
    }'`
  )
  url.searchParams.set('recip_state', state)
  url.searchParams.set('recip_county', county + ' County')

  const data = await helpers.get(url.href)
  return aggregateCountyVaccineData(data)
}

function aggregateCountyVaccineData(data: any) {
  let totalPopulate = (data[0]['series_complete_yes'] * 100) / data[0]['series_complete_pop_pct']

  return {
    totalPopulate: totalPopulate,
    vaccineRateTotal: data[0]['series_complete_yes'],
    vaccinateRatePcr: data[0]['series_complete_pop_pct'],
  }
}

function aggregateCovidData(data: any) {
  return {
    tot_cases: data[0]['tot_cases'],
    new_case: data[0]['new_case'],
    tot_death: data[0]['tot_death'],
    new_death: data[0]['new_death'],
  }
}

function aggregateVaccineData(data: any) {
  let vaccineData = data
  let vaccineRateTotal = 0
  let totalPopulate = 0
  for (let i = 0; i < vaccineData.length; i++) {
    vaccineRateTotal += parseFloat(vaccineData[i]['series_complete_yes'])
    if (vaccineData[i]['series_complete_pop_pct'] == 0)
      totalPopulate += parseFloat(vaccineData[i]['series_complete_yes'])
    else
      totalPopulate +=
        (100 * parseFloat(vaccineData[i]['series_complete_yes'])) /
        parseFloat(vaccineData[i]['series_complete_pop_pct'])
  }
  let vaccinateRatePcr = (vaccineRateTotal / totalPopulate) * 100
  return {
    totalPopulate: totalPopulate,
    vaccineRateTotal: vaccineRateTotal,
    vaccinateRatePcr: vaccinateRatePcr,
  }
}
