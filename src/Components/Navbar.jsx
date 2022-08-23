import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/Navbar.css";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setShowCart] = useState(false);

  const navlink_paths = [
    { path: "/", title: "home" },
    { path: "product", title: "Products" },
    { path: "about", title: "About" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <div
          className={`ham-icon ${showMenu ? "ham-color" : ""}`}
          onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-list ${showMenu ? "showMenu" : ""}`}>
          {navlink_paths.map((item, index) => {
            //iterating over navitems
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
              onClick={() => setShowCart(false)}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
