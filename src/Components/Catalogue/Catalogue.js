import { Button } from '@material-ui/core'
import React from 'react'
import './Catalogue.css'
function Catalogue() {
    return (
        <div className='catalogue'>
            <div className='sub_c'>
                <div className='C_img'>
                    {/* <img src='https://myluxurykitchens.com.au/wp-content/uploads/2021/05/LK-catalog-page.jpg' alt='image'/> */}
                </div>
                <div className='c_button'>
                    <Button style={{border: '1px solid #fff',
    padding: 20,    color: '#fff'}}>
                        Get Free Catalogue
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Catalogue
