import React from "react";
import { flexStyle } from "../style/style";
import { arrowbottom } from "../assets/icons";
import { Link } from "react-router-dom";

const Dropdown = ({ value, style, ms }) => {
  return (
    <>
      <div className="dropdown">
        <div
          className={` ${style} px-3 gray-text ${flexStyle.flexCenter}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {value.title}
          <div className="icon-size-sm ms-1">
            <img src={arrowbottom} alt="" className="w-100" />
          </div>
        </div>

        <ul className="dropdown-menu dropdown-style mt-2">
          {value.links.map((data) => (
            <li key={data.id}>
              <Link className="dropdown-item gray-text">{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
