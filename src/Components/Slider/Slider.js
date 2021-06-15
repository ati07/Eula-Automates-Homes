import React from 'react'
import './Slider.css'
// import TypeWriter from "react-typewriter";
import Typewriter from 'typewriter-effect';

function Slider() {
    return (
        <div className='slider'>
            <div>
                <h1 className='h1'>HEY,</h1> <br/><h2 className='h2'>

            <Typewriter
                options={{
                strings: ['We Are', '<b style={{color:"#fff"}}>EULA HOMES</b>'],
                autoStart: true,
            loop: true,
                }}
                    />

                </h2>
            <p className='p'>One Stop Solution For Your Dream Home.</p>
            </div>
        </div>
    )
}

export default Slider
