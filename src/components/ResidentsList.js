import React from 'react'
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({ location }) => {
    return (
        <div className='container caracter-list'>
             {location.residents?.map((resident) =>(
                <ResidentInfo residents={resident.residents} key={resident.id}/>
            ))}
        </div>
    )
}

export default ResidentsList;
