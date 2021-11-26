import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import Hero from "../../components/Hero/Hero";
import Rides from "../../components/Rides/Rides";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Rides></Rides>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
