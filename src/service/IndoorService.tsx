import React from 'react';
import helpers from "./helper";

export const IndoorFetchWrapper = {
    getIndoorModel
};


function getIndoorModel(data:object){
    let url = `${process.env.AerosolveURL}/aerosolve_model`
    return new Promise(function (resolve, reject) {
        helpers.post(url, data)
            .then(data =>{

                resolve(data)
        })
  })
}

