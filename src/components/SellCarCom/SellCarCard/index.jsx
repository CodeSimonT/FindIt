import React from "react";
import { flexStyle } from "src/style/style";

const index = ({ title, icon, children }) => {
  return (
    <>
      <div className="gray-background py-3 px-4 rounded-4 mb-4">
        <div className={flexStyle.flexStart}>
          <div>
            <i
              className={`fa-solid ${icon} fa-lg me-3`}
              style={{ color: "#fd5631" }}
            ></i>
          </div>
          <h3 className="fw-bold">{title}</h3>
        </div>
        {children}
      </div>
    </>
  );
};

export default index;
