import { Button } from '@material-ui/core'
import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import MyCard1 from '../Card/Card1'
import './KitchenSection4.css'
import { Link } from 'react-router-dom';

function KitchenSection4({url, reverse=false,p,btn=false, h1=false,link,Title}) {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
    return (
        <div  className={reverse?'Ksection_2_reverse':'Ksection_2'}>
            <div className='Ksection2_card'>
                <MyCard1 url={url} />
            </div>
            <div data-aos={reverse?'fade-right':'fade-left'} data-aos-easing="ease-in-out" className={reverse?'Ksection2_content_reverse':'Ksection2_content'}>
                <div className='verticalLine'></div>
                <div className='ksection_content1'>
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

export default KitchenSection4