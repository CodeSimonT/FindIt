import React from "react";
import { ButtonStyle } from "src/components/Model";
import { flexStyle } from "src/style/style";
import { speedometer, location, person100, emailgray } from "src/assets/icons";

const index = () => {
  return (
    <>
      <div className={flexStyle.flexStart}>
        <ButtonStyle text={"Used"} style={"blue-background me-2"} />
        <ButtonStyle text={"Certified"} style={"green-background"} />
      </div>

      <h2 className="my-3">$31,900</h2>

      <div className={flexStyle.flexStart}>
        <div className={`${flexStyle.flexStart} pe-3 border-right-fixed  `}>
          <img src={speedometer} alt="" className="icon-size-md me-1" />
          <p>25K miles</p>
        </div>
        <div className={`${flexStyle.flexStart} ps-3   `}>
          <img src={location} alt="" className="icon-size-md me-1" />
          <p>Chicago, IL 60603</p>
        </div>
      </div>

      {/* card */}
      <div className="gray-background p-4 rounded-3 my-4">
        <p className="mb-2">Private Seller</p>
        <div className={flexStyle.flexStart}>
          <img src={person100} alt="" className="icon-size-lg me-2" />
          <div>
            <h5>Devon Lane</h5>
            <div className={`${flexStyle.flexStart} mt-1`}>
              <div className={flexStyle.flexCenterRow}>
                <i
                  className="fa-solid fa-star me-1"
                  style={{ color: "#fff200" }}
                ></i>
                <i
                  className="fa-solid fa-star me-1"
                  style={{ color: "#fff200" }}
                ></i>
                <i
                  className="fa-solid fa-star me-1"
                  style={{ color: "#fff200" }}
                ></i>
                <i
                  className="fa-solid fa-star me-1"
                  style={{ color: "#fff200" }}
                ></i>
                <i
                  className="fa-solid fa-star me-1"
                  style={{ color: "#fff200" }}
                ></i>
              </div>
              <p>(5 Start reviews)</p>
            </div>
          </div>
        </div>
        {/* contact button */}
        <button
          className={`${flexStyle.flexStart} px-3 py-2 orange-background border-0 rounded-3 mt-3 `}
        >
          <div className={flexStyle.flexCenter}>
            <i
              className="fa-regular fa-message fa-lg me-2"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <h4>Message</h4>
        </button>
      </div>

      {/* email contact */}
      <div className="border-style-gray p-4 rounded-3 ">
        <h4>Email me price drops and new listings for these search results:</h4>
        <div
          className={`${flexStyle.flexCenterRow} border-style-gray p-2 rounded-3 my-3`}
        >
          <img src={emailgray} alt="" className="icon-size mx-2" />
          <input type="text" placeholder="Your Email" className=" w-100" />
          <div className="py-2 px-3 orange-background rounded-2">Subscribe</div>
        </div>
        <div className="d-flex align-items-start">
          <input type="checkbox" name="" id="agreement" className="mt-2 me-2" />
          <label htmlFor="agreement" className="gray-text">
            I agree to receive price drop alerts on this vehicle and helpful
            shopping information.
          </label>
        </div>
      </div>
    </>
  );
};

export default index;
