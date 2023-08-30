import React, { useState } from "react";
import { flexStyle } from "src/style/style";
import { arrowbottom } from "src/assets/icons";

const index = ({ value, width, color }) => {
  const [data, setData] = useState(value[0].title);

  const toggle = (e) => {
    const data = e.target.innerText;
    setData(data);
  };

  return (
    <>
      <div className={`btn-group ${width}`}>
        <div
          className={`input-style py-2 px-3  rounded-3 border-gray ${
            color ? color : "gray-text"
          } ${width} ${flexStyle.flexBetween}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {data}
          <div className="icon-size-sm ">
            <i
              className="fa-solid fa-angle-down fa-xs"
              style={{ color: "#b1afb6" }}
            ></i>
          </div>
        </div>
        <ul className="dropdown-menu dropdown-style">
          {value.map((item) => (
            <li key={item.id}>
              <div className="dropdown-item gray-text pointer" onClick={toggle}>
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default index;
