'use strict'
import { CDCDataFetchWrapper } from '../CDCDataService'
import 'isomorphic-fetch'
import { IndoorFetchWrapper } from '../IndoorService'

test('Test against Confirmed Covid Case , new case and  Get Deaths Covid Case in State', (done) => {
  function callback(data: any) {
    try {
      expect(data).toBeTruthy()
      //If empty then switch to the previous data source
      done()
    } catch (error) {
      done(error)
    }
  }
  let today = new Date()
  CDCDataFetchWrapper.getStateCovidData('CA', today).then(callback)
})

test('Test against Confirmed Covid Case , new case and  Get Deaths Covid Case in County', (done) => {
  function callback(data: any) {
    try {
      expect(data).toBeTruthy()
      //If empty then switch to the previous data source
      done()
    } catch (error) {
      done(error)
    }
  }
  let today = new Date()
  CDCDataFetchWrapper.getStateCountyData('California', 'San Diego', today).then(callback)
})

test('Test against Vaccination Rate in State ', (done) => {
  function callback(data: any) {
    try {
      expect(data).toBeTruthy()
      //If empty then switch to the previous data source
      done()
    } catch (error) {
      done(error)
    }
  }

  let today = new Date()
  CDCDataFetchWrapper.getStateVaccineData('CO', today).then(callback)
})

test('Test against Vaccination Rate in County ', (done) => {
  function callback(data: any) {
    try {
      expect(data).toBeTruthy()
      //If empty then switch to the previous data source
      done()
    } catch (error) {
      done(error)
    }
  }

  let today = new Date()
  CDCDataFetchWrapper.getCountyVaccineData('CO', 'Arapahoe', today).then(callback)
})

test('Test against Indoor Model', (done) => {
  function callback(data: any) {
    try {
      expect(data).toBeTruthy()
      //If empty then switch to the previous data source
      done()
    } catch (error) {
      done(error)
    }
  }
  IndoorFetchWrapper.getIndoorModel({
    nOfPeople: 2,
    sr_age_factor: 0.68,
    sr_strain_factor: 1,
    pim: 0.45,
    floor_area: 910,
    exp_time: 100,
    mean_ceiling_height: 12,
    air_exchange_rate: 3,
    recirc_rate: 1,
    exhaled_air_inf: 2.04,
    def_aerosol_radius: 2,
    merv: 6,
    breathing_flow_rate: 0.29,
    risk_tolerance: 0.1,
    mask_eff: 0.9,
    mask_fit: 0.95,
    max_viral_deact_rate: 0.6,
    relative_humidity: 0.6,
  }).then(callback)
})
