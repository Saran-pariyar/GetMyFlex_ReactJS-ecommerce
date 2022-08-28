import React from "react";
import "../Assets/css/HeroSection.css";
import mac from "../Assets/img/mac.jpg";
import mobile from "../Assets/img/mobile.jpg";
import sunglasses from "../Assets/img/sunglass.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const categories = [
    { title: "smartphones", img: mobile },
    { title: "laptops", img: mac },
    { title: "sunglasses", img: sunglasses },
  ];
  //capitalize first letter of title
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

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
          {categories.map((item, index) => {
            //iterating over all categories
            return (
              <section className="card" key={index}>
                <figure>
                  <img src={item.img} alt="" />
                </figure>
                {/* we will go from hero section to ProductItem/item.title page  */}
                <Link to={"/product_item/" + item.title} className="title">
                  <figcaption>
                    <p className="title">{capitalizeFirstLetter(item.title)}</p>
                  </figcaption>
                </Link>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
