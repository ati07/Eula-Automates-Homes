import React from 'react'
import './PhotoGallary.css'
function PhotoGallary({img1,img2}) {
    return (
        <div className='Gallary'>
            <div className='Gallary_img'>
                <img src={img1}/>
            </div>
            {/* <div className='Gallary_img'>
                <img src={img2}/>
            </div> */}
        </div>
    )
}

export default PhotoGallary
