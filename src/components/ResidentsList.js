import React from 'react'
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({ location }) => {
    return (
        <div className='container grid'>
            {
                location.residents?.map(resident => (
                    <ResidentInfo url={resident}/>  
                ))
            }

        </div>
    )
}

export default ResidentsList;
