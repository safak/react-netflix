import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faBell,
  faSearch,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark fixed-top"
      style={{ backgroundColor: scrolled && "black" }}
    >
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <img src={Logo} alt="logo" height="50px" className="ml-3" />
        <ul className="navbar-nav">
          <li className="nav-item ml-5">Home</li>
          <li className="nav-item ml-3">Tv Shows</li>
          <li className="nav-item ml-3">Movies</li>
          <li className="nav-item ml-3">Latest</li>
          <li className="nav-item ml-3">My List</li>
        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-3">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="nav-item mr-3">KIDS</li>
          <li className="nav-item mr-3">
            <FontAwesomeIcon icon={faGift} />
          </li>
          <li className="nav-item mr-3">
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li className="nav-item">
            <img
              src={require("../../assets/user.jpg")}
              alt="user"
              height="25px"
              className="mr-1"
            />
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
