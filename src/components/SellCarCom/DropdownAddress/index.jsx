import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ data, selectedItem, onItemClick, valid, active, title }) => {
  return (
    <>
      <div className={`btn-group w-100`}>
        <div
          className={`input-style py-2 px-3 rounded-3 border-gray w-100 ${valid} ${flexStyle.flexBetween} ${active}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedItem.name ? selectedItem.name : title}
          <div className="icon-size-sm ">
            <i
              className="fa-solid fa-angle-down fa-xs"
              style={{ color: "#b1afb6" }}
            ></i>
          </div>
        </div>
        <ul className="dropdown-menu dropdown-style ">
          {data.map((item) => (
            <li
              className="dropdown-item gray-text"
              key={item.code}
              onClick={() => onItemClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default index;
