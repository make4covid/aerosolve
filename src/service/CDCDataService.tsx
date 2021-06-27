// Todo build Jest __tests__ for service as well.
//
// When go to component, call the api, component receives new change and reflect to the component
import helpers  from "./helper"

export const CDCDataFetchWrapper = {

    getVaccineData,
    getCovidData
};
//Main function
function getCovidData(state:string){
    let today = new Date()
    let yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    const url1 = 'https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=' + yesterday.toISOString().split('T')[0] + '&state=' + state    // Get Confirmed Covid Case , new case and  Get Deaths Covid Case
    // Todo run get in parallel

    // Recursive solution to get the latest data
    return new Promise(function(resolve,reject){
                helpers.get(url1)
                .then(data=> {
                    if (data.length == 0) {
                        yesterday.setDate(yesterday.getDate() - 1)
                        const url1 = 'https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=' + yesterday.toISOString().split('T')[0] + '&state=' + state
                        helpers.get(url1)
                            .then(sub_data =>{
                            if(sub_data.length == 0){
                                yesterday.setDate(yesterday.getDate() - 1)
                                const url1 = 'https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=' + yesterday.toISOString().split('T')[0] + '&state=' + state
                                helpers.get(url1)
                                    .then(sub_sub_data => {
                                    if(sub_sub_data.length == 0){

                                    }
                                    else{
                                        resolve(aggregateCovidData(sub_sub_data))
                                    }
                                })
                            }
                            else{
                                //Done here
                                resolve(aggregateCovidData(sub_data))
                                //console.log(typeof (sub_data))
                            }
                        })
                    }
                    else{
                        //Done here return result
                        //console.log(data)
                    }
                }
            ).catch(failureCallback)
    })
    // Deduct day until the data is available
    //While loop run it and get the day
}

function failureCallback(error: string) {
    console.error("Something wrong with the data source " + error);
}


function getVaccineData(state:string) {
    let today = new Date()
    const url2 = 'https://data.cdc.gov/resource/8xkx-amqh.json?date=' + today.toISOString().split('T')[0] + '&' + 'recip_state=' + state       // # Get Vaccination Rate State

    return new Promise(function (resolve, reject) {
        helpers.get(url2).then(data => {
                if (data.length == 0) {
                    today.setDate(today.getDate() - 1)
                    const url2 = 'https://data.cdc.gov/resource/8xkx-amqh.json?date=' + today.toISOString().split('T')[0] + '&' + 'recip_state=' + state
                    helpers.get(url2).then(sub_data => {
                        if (sub_data.length == 0) {

                        } else {
                            //Done here
                            //console.log(sub_data)
                            resolve(aggregateVaccineData(sub_data))
                        }
                    })
                } else {
                    //Done here return result
                    resolve(aggregateVaccineData(data))
                    //console.log(data)
                }
            }
        )
    })
}

function aggregateCovidData(data:any){


    return {
        "tot_cases":data[0]["tot_cases"],
        "new_case":data[0]["new_case"],
        "tot_death":data[0]["tot_death"],
        "new_death":data[0]["new_death"],
    }
}

function aggregateVaccineData(data:any){
    let vaccineData = data
    let vaccineRateTotal = 0
    let totalPopulate = 0
    for(let i = 0; i < vaccineData.length; i++) {
        vaccineRateTotal += parseFloat(vaccineData[i]["series_complete_yes"])
        if ((vaccineData[i]["series_complete_pop_pct"]) == 0)
            totalPopulate += parseFloat(vaccineData[i]["series_complete_yes"])
        else
            totalPopulate += (100 * parseFloat(vaccineData[i]["series_complete_yes"])) / parseFloat(vaccineData[i]["series_complete_pop_pct"])
    }
    let vaccinateRatePcr = (vaccineRateTotal / totalPopulate) * 100
    return {"totalPopulate":totalPopulate,"vaccineRateTotal":vaccineRateTotal, "vaccinateRatePcr":vaccinateRatePcr}
}