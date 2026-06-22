const BASE = 'https://rickandmortyapi.com/api'

export const getLocation = (id) =>
  fetch(`${BASE}/location/${id}`).then(r => r.json())

export const getCharacter = (url) =>
  fetch(url).then(r => r.json())

export const getLocationsByName = (name) =>
  fetch(`${BASE}/location?name=${encodeURIComponent(name)}`).then(r => r.json())
