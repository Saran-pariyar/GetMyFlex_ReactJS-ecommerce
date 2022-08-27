import React from "react";
import "../Assets/css/HeroSection.css";
import mac from "../Assets/img/mac.jpg";
import mobile from "../Assets/img/mobile.jpg";
import sunglasses from "../Assets/img/sunglass.jpg";

const HeroSection = () => {
  const categories = [
    { title: "SmartPhones", img: mobile },
    { title: "Laptop", img: mac },
    { title: "Sunglasses", img: sunglasses },
  ];
  // smartphones', 'laptops', 'fragrances', 'sunglasses', 'automotive', 'motorcycle',
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
        <a href="#categories" className="explore-btn">
          Explore!
        </a>
      </div>
      {/* categories section  */}
      <div className="categories-section" id="categories">
        <h2 className="categories-heading">Categories</h2>

        {/* //card section  */}
        <div className="categories-card-section">
          {categories.map((item) => {
            //iterating over all categories
            return (
              <section className="card">
                <figure>
                  <img src={item.img} alt="" />
                </figure>
                <figcaption>
                  <p className="title">{item.title}</p>
                </figcaption>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
