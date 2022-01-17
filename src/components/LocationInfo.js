import React from 'react'

const LocationInfo = ({ location }) => {
    return (
        
        <div className='location-info'>
          <p className='ubication-bg'> Ubicación: <b>{location.name}</b></p>
          <p className='type-bg'> Tipo de Lugar: <b>{location.type}</b></p>
          <p className='dimension-bg'> Dimension: <b>{location.dimension}</b></p>
          <p className='residents-bg'> Cantidad de Residentes: <b>{location.residents?.length}</b></p>
        </div>
        
    )
}

export default LocationInfo;
