import helpers from './helper'

export function getIndoorModel(data: object) {
  const url = new URL('aerosolve_model', `${process.env.REACT_APP_SERVER_URL}`)
  return new Promise(function (resolve, reject) {
    helpers.post(url.href, data).then((data) => {
      resolve(data)
    })
  })
}
