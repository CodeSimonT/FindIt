import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ value }) => {
  return (
    <>
      <div className={` flex-wrap ${flexStyle.flexStart}`}>
        {value.map((item) => (
          <div
            className={`${flexStyle.flexStart}  my-3 pe-3 me-3 border-right-fixed `}
            key={item.id}
          >
            <p className="gray-text me-1">{item.title}:</p>
            <p className="gray-text">{item.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
