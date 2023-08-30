import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ toggle, toggler }) => {
  return (
    <>
      <div
        className={`${flexStyle.flexBetween} border-gray gray-background rounded-3 py-2 px-3`}
      >
        <input type={toggle ? "password" : "text"} className="w-100" />
        <i
          className={`fa-solid ${toggle ? "fa-eye" : "fa-eye-slash"}`}
          style={{ color: "#b1afb6" }}
          onClick={toggler}
        ></i>
      </div>
    </>
  );
};

export default index;
