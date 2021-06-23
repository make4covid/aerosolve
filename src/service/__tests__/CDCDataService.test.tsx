'use strict'
import {CDCDataFetchWrapper} from "../CDCDataService";
import "isomorphic-fetch"
import {IndoorFetchWrapper} from "../IndoorService";

test('Test against Confirmed Covid Case , new case and  Get Deaths Covid Case State', done => {
    function callback(data:any) {
        try {
            expect(data).toBeTruthy()
            //If empty then switch to the previous data source
            console.log(data)
            done();
        } catch (error) {
            done(error);
        }
    }

    CDCDataFetchWrapper.getCovidData("CA").then(callback)

});



test('Test against Vaccination Rate State ', done => {
    function callback(data:any) {
        try {
            expect(data).toBeTruthy()
            //If empty then switch to the previous data source
            console.log(data)
            done();
        } catch (error) {
            done(error);
        }
    }
    CDCDataFetchWrapper.getVaccineData("CO").then(callback)
});



test('Test against Indoor Model', done => {
    function callback(data:any) {
        try {
            expect(data).toBeTruthy()
            //If empty then switch to the previous data source
            console.log(data)
            done();
        } catch (error) {
            done(error);
        }
    }
    IndoorFetchWrapper.getIndoorModel({
        "nOfPeople": 10,
        "sr_age_factor":1,
        "sr_strain_factor": 0.5,
        "pim": 0.00 ,
        "floor_area": 1000,
        "ceiling_height": 12,
        "air_exchange_rate": 1,
        "merv": 1,
        "recirc_rate": 1,
        "relative_humidity": 0.01,
        "breathing_flow_rate": 0.29,
        "exhaled_air_inf": 2.04 ,
        "mask_eff": 0.90,
        "mask_fit": 0.95,
        "max_aerosol_radius": 1,
        "exp_time": 10,
        "risk_tolerance": 0.1,
        "risk_type": "conditional",
        "max_viral_deact_rate": 0.6
    }).then(callback)
});
