import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ value, me, title }) => {
  return (
    <>
      <div
        className={`${flexStyle.flexStart} ${me} rounded-3 filter-backgroud-color border-gray px-3 py-2 fs-6`}
      >
        <p className="me-1">{title}</p>
        <p>{value}</p>
      </div>
    </>
  );
};

export default index;
