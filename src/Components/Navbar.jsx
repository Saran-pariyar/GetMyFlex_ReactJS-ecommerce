import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/Navbar.css";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = ({ cart, setShowCart }) => {
  //used to sow or hide menu
  const [showMenu, setShowMenu] = useState(false);

  //we use it to iterate over nav-items and use less html for nav-links
  const navlink_paths = [
    { path: "/", title: "Home" },
    { path: "product", title: "Products" },
    { path: "about", title: "About" },
  ];

  // show or hide cart
  const show_hide_cart = () => {
    cart ? setShowCart(false) : setShowCart(true);
    //this will close the menu-bar when we press the shopping cart
    showMenu && setShowMenu(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">GetMyFlex</div>
        <div
          className={`ham-icon ${showMenu ? "ham-color" : ""}`}
          onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* shopping cart for mobile  */}
        <AiOutlineShopping id="mobile-shopping-cart" onClick={show_hide_cart} />

        <ul className={`nav-list ${showMenu ? "showMenu" : ""}`}>
          {navlink_paths.map((item, index) => {
            //iterating over 3 nav-items
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <AiOutlineShopping
              className="nav-link "
              id="shopping-cart"
              onClick={() => (cart ? setShowCart(false) : setShowCart(true))}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
