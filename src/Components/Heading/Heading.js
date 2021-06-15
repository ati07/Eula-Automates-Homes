import React from 'react'
import './Heading.css'
function Heading({h1first,h1second}) {
    return (
        <div>
            <div className='Heading'>
                <h1>{h1first}<br/>{h1second}</h1>
            </div>
        </div>
    )
}

export default Heading
