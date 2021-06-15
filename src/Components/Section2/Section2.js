import { Button } from '@material-ui/core'
import React from 'react'
// import MyCard from '../Card/Card'
import MyCard1 from '../Card/Card1'
import './Section2.css'

function Section2({url}) {
    return (
        <div className='section_2'>
            <div className='section2_card'>
                <MyCard1 url={url} />
            </div>
            <div className='section2_content'>
                <h1>Why We Are ?</h1>
                <p>We are an industrial group at an international level whose roots are firmly planted in Europe. A journey driven by creativity strongly linked to production, a history defined by a running theme across the different projects, a culture of making furniture hardware influenced by the international sphere. Communication through a well-defined language, a conscious awareness of one’s roots and the ability to look towards a future where quality and excellence always come first. </p>
                <Button style={{backgroundColor: '#52534e'}}>
                    More About Us
                </Button>
            </div>


        </div>
    )
}

export default Section2
