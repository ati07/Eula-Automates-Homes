import React from 'react'
import './Header.css'
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Header() {
    return (
        <div >
            <div className='header'>
            <div className='logo'>
                <img src='/logo/Original.png' alt="logo"/>
            </div>
            <div className='section2'>
              <div className='phone'>
                <div><PhoneIcon/></div>
                <div>
                    <p className='number'>+2584845266222<br/>7/24 Customer Service</p>
                    {/* <p className='p_service'>7/24 Customer Service</p> */}
                </div>
            </div>
            <div className='whatsapp'>
                <div><WhatsAppIcon/></div>
                <div><p className='number'>+2584845266222<br/>7/24 WhatsApp Chat</p>
                    {/* <p className='p_service'>7/24 WhatsApp Chat</p> */}
                    </div>
            </div>
            <div>
                <div className="facebook"><FacebookIcon/></div>
            </div>
            <div>
                <div className="Instagram"><InstagramIcon/></div>
            </div>  
            </div>
            </div>
        <div className='line'></div>
        </div>
    )
}

export default Header
