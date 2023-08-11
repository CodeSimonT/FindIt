import React from "react";
import { flexStyle } from "../style/style";
import { arrow } from "../assets/icons";

const Title = ({ title, value }) => {
  return (
    <>
      <div className={`${flexStyle.flexBetween} mb-4`}>
        <h2>{title}</h2>
        <div className={`${flexStyle.flexCenter}`}>
          <p className="gray-text me-1">{value}</p>
          <div className="icon-size">
            <img src={arrow} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
