import React,{useEffect} from "react";
import AboutUS_section2 from "../../Components/AboutUs_scetion2/AboutUs_section2";
import Slider from "../../Components/Slider/Slider";
import "./Kitchen.css";
import AOS from "aos";
import "aos/dist/aos.css";
import KitchenSection4 from "../../Components/KitchenSection4/KitchenSection4";
import Heading from "../../Components/Heading/Heading";
import ContactForm from "../../Components/ContactForm/ContactForm";

function Kitchen({Title}) {
    useEffect(() => {
        AOS.init({duration: 1500});
      }, []);
  return (
    <div className="Kitchen">
      <div className="kitchen_section1">
        <div className="kitchen_section_i">
          <h1>{Title?`${Title}`:'CUSTOM MADE'}</h1>
          <h2 className="i_h2">
            KITCHEN
            <br />
            CABINETS
          </h2>
        </div>
        <div className="kitchen_section_ii">
          <p>
            Now you can get your luxury kitchens in NSW with our innovative
            approach to custom cabinetry. You are only a few steps away from
            transforming a crucial part of your home into an elegant,
            personalized, and productive space.
          </p>
        </div>
      </div>
      <div className="kitchen_section2">
        <img
          src="https://myluxurykitchens.com.au/wp-content/uploads/2021/04/kitchen-design-3-1536x640.jpg"
          alt="img"
        />
      </div>
      <div className="Kitchen_section3">
        <div data-aos="fade-left" data-aos-easing="ease-in-out">
          <h1 style={{ fontSize: "2.5em", fontWeight: 100 }}>KITCHEN STYLE</h1>
        </div>
        <div className="Kitchen_Horizontalline"></div>
      </div>
      <div className='Kitchen_section4'>
      <KitchenSection4
        url="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK5-2.jpg"
        p="Somewhere between contemporary and utilitarian cabinetry lies a contemporary design style focusing on clean lines and open spaces. This luxury kitchen is not uncommon to see extended, bold embellishments, contemporary designs are synonymous with more natural tones coupled with sleek, smooth, polished surfaces to deliver a modern taste of elegance.

                    Are you considering a contemporary design style? or that style that gives you the luxury kitchen? You can never go wrong with this bold, cultured, and streamlined design."
        Title="MODERN KITCHEN CABINETS"
        btn
        h1
      />
      </div>
      <KitchenSection4
        url="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/HK03-1-800%C2%B7508-2.jpg"
        p="Hampton kitchen cabinets are a perfect mix of traditional detailing and a modern base, giving you just the right balance of refinement and comfort. Looking to build a space that looks homely yet reflects your personal touch? Hampton cabinets deliver just that, helping you create harmony between all the elements in your space. You can easily play around with multiple ideas, leveraging the self-expression, flexibility, and freedom the casual kitchen design style is known for."
        Title="HAMPTON KITCHEN CABINETS"
        btn
        h1
        reverse
      />
      <KitchenSection4
        url="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/TK04-1-800%C2%B7508-3.jpg"
        p="With classic cabinet styling, you are taking a trip to the near past, reminiscing the inviting and elegant nature of what used to be the perfect kitchen. Think of an ornate design, yet rich and decorative. Classic cabinet design styles reflect the European golden age, with the use of multiple colors, detailed motifs, and a combination of materials that transform the entire setup into century-old styling. These designs seek to add order and refinement in the fast world we currently live in, and it does this by using balance and symmetry."
        Title="CLASSIC
                            KITCHEN CABINETS"
        btn
        h1
      />
    <Heading h1first='EULA' h1second='HOMES'/>
    <ContactForm/>
    </div>
  );
}

export default Kitchen;