import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResidentInfo = ({ url }) => {

    const [caracter, setCaracter] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setCaracter(res.data))
            .catch(err => console.log(err))
    }, [url])

    console.log(caracter)

    return (

            <main className='card'>
                <p>Nombre: <b>{caracter?.name}</b></p>
                <img src={caracter?.image} alt="caracter-img" />
                <p >Status: {caracter?.status}</p>
                <p >Origen: {caracter?.origin?.name}</p>
                <p>Capitulos: {caracter?.episode?.length}</p>
            </main>
        
    )
}
export default ResidentInfo;