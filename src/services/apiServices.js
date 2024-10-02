import axios from 'axios'
const urlLocations = 'https://rickandmortyapi.com/api/location'
const urlCharacters = 'https://rickandmortyapi.com/api/character'

const getAllLocatiosn = () => {
    return axios
        .get(urlLocations)
        .then(response => {
            const {data} = response
            return data
        })
}

export default getAllLocatiosn