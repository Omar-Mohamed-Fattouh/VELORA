import React from "react";
import {Hero}  from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CityHouse from "../components/CityHouse";
import Article from "../components/Article";
// import BestProjects from "../components/BestProjects";
import FAQSection from "../components/FAQSection";
import Counter from "../components/Counter";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <CityHouse />
      <Article/>
      {/* <BestProjects /> */}
      <FAQSection />
      <Counter />
    </div>
  );
};

export default Home;
