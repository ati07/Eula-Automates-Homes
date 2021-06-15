import React,{useEffect} from "react";
import MyCard from "../Card/Card";
import "./Section.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Section1({line_inverse=false,url1,url2}) {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <div className="section1">
      <div data-aos={line_inverse?'fade-right':'fade-left'} data-aos-easing="ease-in-out" className={line_inverse?"line_inverse":"line2"}></div>
      <div data-aos={line_inverse?'fade-right':'fade-left'}  data-aos-easing="ease-in-out" className="section1_content">
        <div>
          <MyCard url={url1} />
        </div>
        <div>
        <MyCard url={url2} />

        </div>
      </div>
    </div>
  );
}

export default Section1;
