import React from 'react'
import TestemonialCard from '../../Components/TestemonialCard/TestemonialCard'
import TestemonialSection from '../../Components/TestemonialSection/TestemonialSection'
import './Testemonial.css'

function Testemonial() {
    return (
        <div className='test'>
            <TestemonialSection/>
            <div className='test_1'>
                <h1>CUSTOMER REVIEWS</h1>
            </div>
            <div className='test2'>
                <div >
                    <h1 className='test2_h1'>What people say?</h1>
                </div>
                <div>
                    <p className='test2_p'>NB: These feedbacks were extracted from the email correspondence with our customers.</p>
                </div>

            </div>
            <div className='TCard'>
                <TestemonialCard/>
                <TestemonialCard/>

            </div>
            <div className='TCard'>
                <TestemonialCard/>
                <TestemonialCard/>

            </div>
            <div className='TCard'>
                <TestemonialCard/>
                <TestemonialCard/>

            </div>
            <div className='TCard'>
                <TestemonialCard/>
                <TestemonialCard/>

            </div>
            <div className='TCard'>
                <TestemonialCard/>
                <TestemonialCard/>

            </div>
            <div className='TCard'>
                <TestemonialCard/>
                <TestemonialCard/>

            </div>
        </div>
    )
}

export default Testemonial
