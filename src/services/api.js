const BASE = 'https://rickandmortyapi.com/api'

export const getLocationById = (id) =>
  fetch(`https://rickandmortyapi.com/api/location/${id}`).then(r => r.json())

export const searchLocationByName = (name) =>
  fetch(`https://rickandmortyapi.com/api/location?name=${encodeURIComponent(name)}`)
    .then(r => r.json())

export const getCharacter = (url) =>
  fetch(url).then(r => r.json())
