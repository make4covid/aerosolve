import React from 'react';
import helpers from "./helper";

export const IndoorFetchWrapper = {
    getIndoorModel
};


function getIndoorModel(data:object){
    let url = " http://127.0.0.1:5000/aerosolve_model"
    return new Promise(function (resolve, reject) {
        helpers.post(url, data)
            .then(data =>{

                resolve(data)
        })
  })
}

