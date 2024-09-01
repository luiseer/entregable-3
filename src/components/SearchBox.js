import axios from 'axios'
import React, {useState}  from 'react'

const SearchBox = ({ setLocation }) => {
    const [id, setId] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocation(res.data))
    }
    return (
        <form className='search-box' onSubmit={handleSubmit}>
            <input placeholder='ingresa el numero de planeta' type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <button className='boton' >Search</button>
        </form>
    )
}

export default SearchBox;
