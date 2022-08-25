import React from "react";
import "../Assets/css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* <a href="https://www.etelligens.com/" style>Click to see demo</a> */}
      <div className="main-hero-section">
        <h1 className="heading">
          Welcome to <br /> <span>GetMyFlex!</span>
        </h1>
        <h1 className="heading">
          The shop for the <br />
          <span> #Genz</span>
        </h1>
        <a href="#item" className="explore-btn">
          Explore!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
