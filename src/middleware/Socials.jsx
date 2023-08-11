import React from "react";
import { Link } from "react-router-dom";
import { flexStyle } from "../style/style";
const Socials = ({ data }) => {
  return (
    <>
      <div className="me-2">
        <Link
          to={data.link}
          className={`${flexStyle.flexCenter} lightgray-bg-color p-2 rounded-circle`}
        >
          <img src={data.img} alt="" className="icon-size-md" />
        </Link>
      </div>
    </>
  );
};

export default Socials;
