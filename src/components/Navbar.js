import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ShoppingBag from "./ShoppingBag";
import Profile from "./Profile";
import logo from "../icon.png";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" id="nav-item-1">
              <Link to="/" className="icon-container" onClick={closeMobileMenu}>
                <img src={logo} id="icon" />
                Crystal's Magick Corner
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/tarotreadings"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                TAROT READINGS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/oracledecks"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ORACLE DECKS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
          </ul>
          {/* <Profile />
          <ShoppingBag />
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div> */}

          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Crystal's Magick Corner
          </Link> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
