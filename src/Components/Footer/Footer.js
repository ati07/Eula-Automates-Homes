import React from 'react'
import './Footer.css'
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className='footer'>
            <div className='logof'><img src='/logo/Original.png'alt='Image'/></div>
            <div style={{textAlign:'left'}}>
                <div className='footer_contact'><h2>CONTACT INFORMATION</h2></div>
                <div className='footer_contact'><PhoneIcon style={{paddingRigth:10}}/>1300560980</div>
                <div className='footer_contact'><h2>24/7 Customer Service</h2></div>
                <div className='footer_contact'><WhatsAppIcon style={{paddingRigth:10}}/>0431946088</div>
                <div className='footer_contact'><h2>24/7 WhatsApp Chat</h2></div>
                <div className='footer_contact'>1802,83 Harbour Street, Haymarket, <br/> NSW 2000</div>
                <div className='footer_contact'>info@myluxurykitchens.com.au</div>
                <div className='footer_contact'><FacebookIcon style={{paddingRigth:10}}/>www.facebook.com/Australianluxuryinteriors</div>

            </div>
            
            <div style={{textAlign:'left',width: 271,marginRight: -42}}>
            <div className="footer_Menu"><h2>MENU</h2></div>
                <div className="footer_Menu" id='footer_home'>HOME</div>
                <div className="footer_Menu">ABOUT US</div>
                <div className="footer_Menu">LIVING ROOM</div>
                <div className="footer_Menu">KITCHEN</div>
                <div className="footer_Menu">BEDROOM</div>
                <div className="footer_Menu">GADGETS</div>
                <div className="footer_Menu">BLOG</div>

            </div>

        </div>
    )
}

export default Footer
