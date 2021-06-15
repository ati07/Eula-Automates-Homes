import { Button } from '@material-ui/core'
import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import MyCard1 from '../Card/Card1'
import './AboutUs_section2.css'
import { Link } from 'react-router-dom';

function AboutUS_section2({url, reverse=false,p,btn=false, h1=false,link,Title}) {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
    return (
        <div  className={reverse?'Asection_2_reverse':'Asection_2'}>
            <div className='Asection2_card'>
                <MyCard1 url={url} />
            </div>
            <div data-aos={reverse?'fade-right':'fade-left'} data-aos-easing="ease-in-out" className={reverse?'Asection2_content_reverse':'Asection2_content'}>
                <div className='verticalLine'></div>
                <div className='Asection_content1'>
                    <h1 className={h1?'h1':'A_h1'}>{Title}</h1>
                <p>{p}</p>
                <Link to={link} className={btn?'btn':'A_btn'}>
                <Button >Browse designs</Button>
                </Link>
                </div>
                
            </div>


        </div>
    )
}

export default AboutUS_section2
