import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ icon, device, app, time, active }) => {
  return (
    <>
      <div
        className={`${flexStyle.flexAlignJustifyStart} border-bottom-gray py-3`}
      >
        <div>
          <i className={`fa-solid ${icon} fa-lg `}></i>
        </div>
        <div className="ms-3">
          <h5 className="fw-bold mb-2">{device} </h5>
          <div className={flexStyle.flexStart}>
            <p className="border-right pe-2 gray-text fw-bold">{app}</p>
            <p className={`${active} ps-2 fw-bold `}>{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
