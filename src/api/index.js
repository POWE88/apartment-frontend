const BASE = 'http://localhost:3001'

let getApartments = function() {
  return fetch(BASE + '/apartments')
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

let getApartment = function(id) {
  return fetch(BASE + `/apartments/${id}`)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

let createApartment = function(apartment) {
  console.log(apartment)
  return fetch(BASE + '/apartments', {
    body: JSON.stringify(apartment),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

let deleteApartment = function(apartment) {
  return fetch(BASE + '/apartments', {
    body: JSON.stringify(apartment),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

let editApartment = function(id) {
  return fetch(BASE = `/apartments/${id}`)
}

export {
  getApartments, getApartment, createApartment, deleteApartment
}
