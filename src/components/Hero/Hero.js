import React from "react";
import { HashLink } from "react-router-hash-link";
import smoothscroll from "smoothscroll-polyfill";
import "./Hero.css";

const Hero = () => {
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 style={{ color: "white" }}>Want To Chill?</h1>
        <HashLink to="/home#rides" smooth>
          <button className="btn-regular">Plan a ride</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Hero;
