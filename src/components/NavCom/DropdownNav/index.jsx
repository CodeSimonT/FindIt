import React, { useState, createContext } from "react";
import { flexStyle } from "src/style/style";
import { arrowbottom } from "src/assets/icons";
import { Link } from "react-router-dom";

const Dropdown = ({ value, style, ms }) => {
  const useContext = createContext();
  const [toggle, setToggle] = useState("");

  const click = (e) => {
    setToggle(e.target.innerText);
  };
  return (
    <>
      <div className="dropdown">
        <div
          className={` ${style} px-3 gray-text  ${flexStyle.flexCenter}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {value.title}
          <div className="icon-size-sm ms-1">
            <img src={arrowbottom} alt="" className="w-100" />
          </div>
        </div>

        <ul className="dropdown-menu dropdown-style-nav mt-2">
          {value.links.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                onClick={click}
                className="dropdown-item gray-text"
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
