import React from "react";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import PhotoGallary from "../../Components/PhotoGallary/PhotoGallary";

function ModernKitchen() {
  return (
    <div>
      <FeatureSection
        type="MODERN"
        link="https://myluxurykitchens.com.au/wp-content/uploads/2021/04/kitchen-cabinets-design.jpg"
        h4_1="Natural Materials"
        h4_2="Few Accessories"
        h4_3="Geometric Elements"
        p1="Contemporary cabinets are made from stone, glass, leather, or aluminum. Having modern glass cabinet inserts in your kitchen cabinets infuses a touch of nature without overshadowing the overall contemporary feel."
        p2="Contemporary designs are known for their sleek yet bold appearance. An easy way to complement a contemporary design is to introduce modern cabinetry hardware with striking and simple lines."
        p3="Whether squares, circles, or straight lines, cabinet door styles with geometric shapes are hardly a miss. Another source of geometric elements is contrasting colors, including deep brown cabinets combined with a striking blue center island."
      />
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-1-1-1-1536x960.jpg" />
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-2-1-2-1536x960.jpg" />
      </div>
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-3-1-1-1536x960.jpg" />
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-4-1-1-1536x960.jpg" />
      </div>
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-5-1-2-1536x960.jpg" />
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-8-1-1-1536x960.jpg" />
      </div>
      <div style={{ display: "flex" }}>
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-9-1-1-1536x960.jpg" />
        <PhotoGallary img1="https://myluxurykitchens.com.au/wp-content/uploads/2021/05/MK-9-1-1-1536x960.jpg" />
      </div>
    </div>
  );
}

export default ModernKitchen;
