import React from "react";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import PhotoGallary from "../../Components/PhotoGallary/PhotoGallary";

function HamptonKitchen() {
  return (
    <div>
      <FeatureSection
        type="HAMPTON"
        link="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/HK02-10.jpg"
        h4_1="Diverse accessories"
        h4_2="Bold accents"
        h4_3="Architectural elements"
        p1="Contemporary cabinets are made from stone, glass, leather, or aluminum. Having modern glass cabinet inserts in your kitchen cabinets infuses a touch of nature without overshadowing the overall contemporary feel."
        p2="Contemporary designs are known for their sleek yet bold appearance. An easy way to complement a contemporary design is to introduce modern cabinetry hardware with striking and simple lines."
        p3="Whether squares, circles, or straight lines, cabinet door styles with geometric shapes are hardly a miss. Another source of geometric elements is contrasting colors, including deep brown cabinets combined with a striking blue center island."
      />
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/06/HK01-1-1920%C2%B71200-1536x960.jpg" />
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/HK02-1-1920%C2%B71200-1-1536x960.jpg" />
      </div>
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/HK03-1-1920%C2%B71200-1-1536x960.jpg" />
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/HK04-1-1920%C2%B71200-1-1536x960.jpg" />
      </div>
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/HK05-1-1920%C2%B71200-1-1536x960.jpg" />
        
      </div>
      
    </div>
  );
}

export default HamptonKitchen;
