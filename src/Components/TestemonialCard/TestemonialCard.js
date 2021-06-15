import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import './TestemonialCard.css'

function TestemonialCard() {
    return (
        <div className='TestemonialCard'>
            <div>
                <FormatQuoteIcon/><br/>
                <p>
                “Yes, I wanted a better kitchen, but I never imagined the transformation would be as exquisite as this. Despite my initial doubts about refacing, the Luxury Kitchen team ensured we were comfortable and convinced with that choice. We had to integrate a lot of changes, additions and subtractions, and even last-minute adjustments, but the team was very agreeable and accommodating. Everyone on the team was dedicated to making this gorgeous transformation happen, and it is a delight what we have in the end.”
                </p>
            </div>
        </div>
    )
}

export default TestemonialCard
