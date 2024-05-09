// components/MainContent.js
import React from "react";
import SectionTop from "../Accueil/section/sectionTop"; // You would create a Section component for each section of the page
import Section2 from "../Accueil/section/section2"; // You would create a Section component for each section of the page
import Section3 from "../Accueil/section/section3"; // You would create a Section component for each section of the page
import Section4 from "../Accueil/section/section4"; // You would create a Section component for each section of the page

const MainContent = () => {
  return (
    <div className="">
      <SectionTop />
      <Section2 />
      <Section3/>
      <Section4/>
    </div>
  );
};

export default MainContent;
