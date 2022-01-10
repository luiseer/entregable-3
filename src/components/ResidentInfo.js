import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ResidentInfo = ({ location }) => {

    const [caracter, setCaracter] = useState({})

    useEffect(() => {
        axios.get(location)
        .then(res => setCaracter(res.data))
        .catch(err => console.log(err))
    }, [location])

    return (
            <div className='card'>
                <p>Nombre: <b>{caracter?.name}</b></p>
                <img src={caracter?.image} alt="" />
                <p>Status: {caracter?.status}</p>
                <p>Origen: {caracter?.origin?.name}</p>
                <p>Capitulos: {caracter?.episode?.length}</p>
            </div>
    )
}
export default ResidentInfo;