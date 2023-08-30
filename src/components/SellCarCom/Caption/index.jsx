import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ title }) => {
  return (
    <>
      <div className={flexStyle.flexStart}>
        <p className="mt-3 mb-2">{title}</p>
        <div className="ms-1">
          <i
            className={`fa-solid fa-asterisk fa-2xs`}
            style={{ color: "#fd5631" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default index;
