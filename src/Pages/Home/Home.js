import React, { useEffect } from "react";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Slider from "../../Components/Slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css'
import Catalogue from "../../Components/Catalogue/Catalogue";


function Home() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const section2_urls = [
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/05/LK-craftman.jpg",
  ];
  const section1_urls = [
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/04/kitchen-design-2.jpg",
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/04/wardrobe-design-2.jpg",
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/04/bathroom-cabinets-design-2.jpg",
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/04/tv-cabinets-design-2.jpg",
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/05/bbq-kitchen-cabinets-from-LK-2.jpg",
    "https://myluxurykitchens.com.au/wp-content/uploads/2021/05/laundry-cabinets.jpg",
  ];
  return (
    <div className='Home'>
      <Slider />
      <div style={{width:'100%'}}
      >
        <Section1 url1={section1_urls[0]} url2={section1_urls[1]} />
      </div>
      <div style={{width:'100%'}}
       >
        <Section1
          line_inverse
          url1={section1_urls[2]}
          url2={section1_urls[3]}
        />
      </div>
      <div style={{width:'100%'}}>
        <Section1 url1={section1_urls[4]} url2={section1_urls[5]} />
      </div>

      <Section2 url={section2_urls[0]} />
      {/* <Catalogue/> */}
    </div>
  );
}

export default Home;
