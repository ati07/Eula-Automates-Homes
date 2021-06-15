import React,{useEffect} from 'react'
import './FeatureSection.css'
import AOS from "aos";
import "aos/dist/aos.css";

function FeatureSection({type,link,p1,p2,p3,h4_1,h4_2,h4_3}) {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
    return (
        <div>
            <div className='feature_content'>
                <div className='feature_content_1'>
                    <h1><span className='span1'>FEATURES OF</span> <br/>
                    <span className='span2'>{type} <br/>KITCHEN</span></h1>
                    <img src={link}/>
                </div>
                <div className='feature_content_2'>
                    <div>
                      <h4>{h4_1}</h4>  
                      <p className='fp'>{p1}</p>
                    </div>
                    <div>
                      <h4>{h4_2}</h4>  
                      <p className='fp'>{p2}</p>
                    </div>
                    <div>
                      <h4>{h4_3}</h4>  
                      <p className='fp'>{p3}</p>
                    </div>
                    
                </div>
            </div>
            <div className='feature_content_3' data-aos='fade-left'>
                <div className='design'>
                    <h1>{type} KITCHEN DESIGNS</h1>
                </div>
                <div className='horizontalLine_f'></div>
            </div>

        </div>
    )
}

export default FeatureSection
