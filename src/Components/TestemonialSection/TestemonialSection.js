import { Button } from '@material-ui/core'
import React from 'react'
// import MyCard from '../Card/Card'
import MyCard1 from '../Card/Card1'
import './TestemonialSection.css'

function TestemonialSection({url}) {
    return (
        <div className='Tsection_2'>
            <div className='Tsection2_card'>
                <MyCard1 url='/logo/Original.png' />
            </div>
            <div className='Tsection2_content'>
                <h1>EULA Customer Reviews</h1>
                <p>Wondering what our customers have to say about our products and services? Here is how our customers answered when asked, “How would you describe your experience with EULA?” </p>
                
            </div>


        </div>
    )
}

export default TestemonialSection
