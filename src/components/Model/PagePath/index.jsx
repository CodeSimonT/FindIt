import React from "react";
import { arrowgray } from "src/assets/icons";
import { flexStyle } from "src/style/style";

const index = ({ link, children }) => {
  return (
    <>
      <div className={`${flexStyle.flexStart} mb-3`}>
        <p className="gray-text fs-6">Home</p>
        <div className={`${flexStyle.flexStart} icon-size-md mt-1 mx-1`}>
          <img src={arrowgray} alt="" className="w-100" />
        </div>
        {children}
        <p>{link}</p>
      </div>
    </>
  );
};

export default index;
