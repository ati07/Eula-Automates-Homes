import React,{useEffect} from "react";
import AboutUS_section2 from "../../Components/AboutUs_scetion2/AboutUs_section2";
import MyCard1 from "../../Components/Card/Card1";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
        useEffect(() => {
          AOS.init({duration: 1500});
        }, []);
  return (
    <div className="About">
      <div className="About_section1">
        <div className="AboutSubSection1">
          <h1>ABOUT US</h1>
          <h2>EULA AUTOMATES HOME</h2>

          <img src="https://www.myluxurykitchens.com.au/wp-content/uploads/2021/05/About-BG.png" />
        </div>
      </div>
      <div className="About_section2">
        <div data-aos='fade-left' data-aos-easing="ease-in-out">
          <h1 style={{ fontSize: "2.5em", fontWeight: 100 }}>EULA AUTOMATES</h1>
        </div>
        <div className="AboutUs_Horizontalline"></div>
      </div>
      <AboutUS_section2 url='https://myluxurykitchens.com.au/wp-content/uploads/2021/05/Luxury-Kitchen-Home-Show-12.jpg' p='With over 30 years industry experience, Luxury Kitchens is a privately owned company with a strong European heritage. The company has since grown from being an Australian based workshop into a full-sized enterprise with pioneer inventions in sophisticated modern kitchen architecture.'/>
      <AboutUS_section2  reverse url='https://myluxurykitchens.com.au/wp-content/uploads/2021/05/Luxury-Kitchen-Home-Show-21.jpg' 
      p='Luxury Kitchens is proud to introduce the latest in European designs that oﬀer a blend of elegance, functionality, and style.
        
      Luxury Kitchens has extended it’s brand across the world, expanding and oﬀering our service worldwide. We export up to 60% of our kitchens, earning us the popular “Proudly Australian” tag as a synonym to our brand.'/>
      <AboutUS_section2 url='https://myluxurykitchens.com.au/wp-content/uploads/2021/05/Luxury-Kitchen-Home-Show-69.jpg' p='With over 30 years industry experience, Luxury Kitchens is a privately owned company with a strong European heritage. The company has since grown from being an Australian based workshop into a full-sized enterprise with pioneer inventions in sophisticated modern kitchen architecture.'/>
    
    </div>
  );
}

export default AboutUs;
