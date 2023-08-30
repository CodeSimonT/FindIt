import React, { useState, createContext } from "react";
import { logo } from "src/assets/img";
import { flexStyle } from "src/style/style.js";
import { Link } from "react-router-dom";
import { box, person, add, menu } from "src/assets/icons";
import { navLinks } from "src/data/constant";
import { Dropdown } from "src/components/Model";

const Navbar = () => {
  return (
    <>
      <nav className="container-fluid fixed-top nav-style">
        <div className="d-flex justify-content-between py-4">
          <div className={`${flexStyle.flexCenter}`}>
            {/* logo */}
            <div className="logo-container-size me-2">
              <img src={logo} alt="" className="w-100" />
            </div>
            <h3 className="me-4">FindIt</h3>

            {/* navLinks */}
            <div className="d-none d-lg-flex">
              {/* home */}
              <div className={`${flexStyle.flexCenter} px-4 border-right `}>
                <div className="icon-size me-1">
                  <img src={box} alt="" className="w-100" />
                </div>
                <Link to={"/"} className="hypertag-style">
                  Home
                </Link>
              </div>
              {/* dropdown links */}
              {navLinks.map((item, index) => (
                <Dropdown value={item} key={index} />
              ))}
            </div>
            <div className={`${flexStyle.flexCenter} ms-2`}></div>
          </div>
          {/* navButton */}
          <div className={`${flexStyle.flexCenter}`}>
            {/* sign-in */}
            <div className={`${flexStyle.flexLgShow} me-3`}>
              <div className={`${flexStyle.flexCenter} icon-size me-1`}>
                <img src={person} alt="" className="w-100 h-100" />
              </div>
              <Link className="hypertag-style">Sign in</Link>
            </div>
            {/* menu */}
            <div className={`${flexStyle.flexLgHide} me-3 icon-size me-1`}>
              <Link className="hypertag-style">
                <img src={menu} alt="" className="w-100 h-100" />
              </Link>
            </div>
            {/* sell button */}
            <div className={`${flexStyle.flexCenter} nav-button-style`}>
              <div className={`${flexStyle.flexCenter} icon-size me-1`}>
                <img src={add} alt="" className="w-100" />
              </div>
              <Link className="hypertag-decoration text-white">Sell Car</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
