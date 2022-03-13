import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import EducationSplit from "../components/sections/Education";
import ExperienceSplit from "../components/sections/Experience";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <ExperienceSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <EducationSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-03"
      />
      {/* <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
};

export default Home;
