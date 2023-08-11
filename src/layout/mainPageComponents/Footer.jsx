import React from "react";
import {
  FooterLinks,
  FooterHeading,
  SocialIcons,
} from "../../constants/contant";
import { flexStyle } from "../../style/style";
import { logo } from "../../assets/img";
import Dropdown from "../../middleware/Dropdown";
import Socials from "../../middleware/Socials";
import { paperplane, emailgray, phone, email } from "../../assets/icons";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid py-4 darkblue-bg-color">
        {/* heading */}
        <div
          className={`${flexStyle.flexBetweenResponsive} border-bottom-gray pb-4`}
        >
          <div className={`${flexStyle.flexStart} mb-3 mb-md-0`}>
            <div className="logo-container-size me-2">
              <img src={logo} alt="" className="w-100" />
            </div>
            <h3 className="me-4">FindIt</h3>
          </div>
          <div className="d-flex">
            {FooterHeading.map((item) => (
              <div className={flexStyle.flexStart} key={item.id}>
                <div className={`${flexStyle.flexCenter} icon-size`}>
                  <img src={item.img} alt="" className="w-75" />
                </div>
                <Dropdown value={item} style={"ps-0 "} />
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="row mt-4">
          {/* email input */}
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <div>
              <h5 className="mb-2">Subscribe to our newsletter</h5>
              <p className="mb-3">Don’t miss any relevant offers!</p>
              <div
                className={`${flexStyle.flexCenterRow} p-2 rounded-3 border-style-gray `}
              >
                <img src={emailgray} alt="" className="icon-size ms-2 me-1" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email"
                  className="w-100"
                />
                <div
                  className={`${flexStyle.flexCenter} orange-background p-2 rounded-2`}
                >
                  <img src={paperplane} alt="" className="icon-size" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              {/* footer links */}
              {FooterLinks.map((item) => (
                <div key={item.id} className="col-12 col-sm-6 col-lg-3">
                  <h5 className="mb-3">{item.title}</h5>
                  <ul className="px-0">
                    {item.Links.map((value) => (
                      <li key={value.id} className="gray-text">
                        {value.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* footer socials */}
              <div className="col-12 col-sm-6 col-lg-3">
                {/* contacts */}
                <div className={`${flexStyle.flexStart} mb-2`}>
                  <img src={phone} alt="" className="icon-size me-1" />
                  <h6>0912345678</h6>
                </div>
                <div className={`${flexStyle.flexStart} mb-4`}>
                  <img src={email} alt="" className="icon-size me-1" />
                  <h6>Findit@gmail.com</h6>
                </div>
                {/* socials */}
                <div className={flexStyle.flexCenterRow}>
                  {SocialIcons.map((item) => (
                    <div key={item.id}>
                      <Socials data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${flexStyle.flexCenter} mt-3`}>
          <p className="gray-text text-center">
            All rights reserved. build by Simon Turiano
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
