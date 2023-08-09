import React, { useState } from "react";
import { logo } from "../../assets/img";
import { flexStyle } from "../../style/style.js";
import { Link } from "react-router-dom";
import { box, arrowbottom, person, add, menu } from "../../assets/icons";
import { navLinks } from "../../constants/contant.js";
const Navbar = () => {
  return (
    <>
      <nav className="fixed-top nav-style">
        <div className="d-flex justify-content-between px-3 py-4">
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
              {navLinks.map((item, index) => (
                <div className="dropdown" key={index}>
                  <div
                    className={`dropdown-style px-3 gray-text ${flexStyle.flexCenter}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.title}
                    <div className="icon-size-sm ms-1">
                      <img src={arrowbottom} alt="" className="w-100" />
                    </div>
                  </div>

                  <ul className="dropdown-menu">
                    {item.links.map((data) => (
                      <li key={data.id}>
                        <Link className="dropdown-item">{data.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* dropdown links */}
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
