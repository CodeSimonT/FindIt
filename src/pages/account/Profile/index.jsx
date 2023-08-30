import React from "react";
import { Outlet } from "react-router-dom";
import { ButtonStyle, PagePath } from "src/components/Model";
import { ProfileLink } from "src/components/ProfileLinkCom";
import { person100 } from "src/assets/icons";
import { flexStyle } from "src/style/style";

const index = () => {
  return (
    <>
      <section className="pt-130 container-fluid">
        <div>
          <PagePath link={"Mercedes-Benz E 400 Cabriolet"}></PagePath>
        </div>
        <div className="py-5 row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <div className="gray-background rounded-4">
              {/* profile */}
              <div className={`${flexStyle.flexAlignJustifyStart} py-4 px-3`}>
                <img src={person100} alt="" className="icon-size-lg me-2" />
                <div>
                  <h5>Devon Lane</h5>
                  <div className={`${flexStyle.flexStart} mt-1`}>
                    <div className={flexStyle.flexCenterRow}>
                      <i
                        className="fa-solid fa-star me-1"
                        style={{ color: "#fdbc31" }}
                      ></i>
                      <i
                        className="fa-solid fa-star me-1"
                        style={{ color: "#fdbc31" }}
                      ></i>
                      <i
                        className="fa-solid fa-star me-1"
                        style={{ color: "#fdbc31" }}
                      ></i>
                      <i
                        className="fa-solid fa-star me-1"
                        style={{ color: "#fdbc31" }}
                      ></i>
                      <i
                        className="fa-solid fa-star me-1"
                        style={{ color: "#fdbc31" }}
                      ></i>
                    </div>
                  </div>
                  {/* contact */}
                  <div className="mt-3">
                    <div className={flexStyle.flexStart}>
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "#b1afb6" }}
                      ></i>
                      <p className="ms-2 gray-text">09756738475</p>
                    </div>
                    <div className={flexStyle.flexStart}>
                      <i
                        className="fa-regular fa-envelope"
                        style={{ color: "#b1afb6" }}
                      ></i>
                      <p className="ms-2 gray-text">simon@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div className="pb-3">
                {/* sell button */}
                <ButtonStyle
                  text={"Sell Card"}
                  style={`${flexStyle.flexCenter} orange-background py-2 mx-3 mb-4`}
                >
                  <i
                    className="fa-solid fa-plus me-1"
                    style={{ color: "#ffffff" }}
                  ></i>
                </ButtonStyle>
                {/* menu style on tablet view */}
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#profileLinksItem"
                  aria-expanded="false"
                  aria-controls="profileLinksItem"
                >
                  <ButtonStyle
                    text={"Menu"}
                    textcolor={"orange-text"}
                    style={`${flexStyle.flexMdShowCenter} white-background py-2 mx-3 `}
                  >
                    <i
                      className="fa-solid fa-bars me-1"
                      style={{ color: "#fd5631" }}
                    ></i>
                  </ButtonStyle>
                </div>
              </div>

              {/* links */}
              <ProfileLink style={"d-none d-md-block"} />
              {/* link collapse md below */}
              <div className="collapse" id="profileLinksItem">
                <ProfileLink />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
