"use client";
import Skills from "./Skills";
import EducationAndExperience from "./EducationAndExperience";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import ThankYou from "./ThankYou";
import WhatIDo from "./WhatIDo";
import CopyRight from "./CopyRight";
import Herosection from "./Herosection";
import Ideal from "./Ideal";
import Why from "./Why";
const HomePage = () => {
  return (
    <>
      <Herosection />
      <WhatIDo />
      <Skills />
      <EducationAndExperience />
      <Projects />
      <Why></Why>
      <Ideal />
      <ContactUs />
      <CopyRight />
    </>
  );
};
export default HomePage;
