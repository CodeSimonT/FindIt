import React from "react";

const index = ({ text, style, textcolor, children }) => {
  return (
    <>
      <div className={` ${style} rounded-3 pointer px-3 py-1 fs-6`}>
        {children}
        <p className={`${textcolor} pointer`}>{text}</p>
      </div>
    </>
  );
};

export default index;
