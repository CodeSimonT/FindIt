import React from "react";
import { suv, sort, gridicon, listicon } from "src/assets/icons";
import { DropdownToggle } from "src/components/Model";
import { DropdownLinks } from "src/data/constant";
import { flexStyle } from "src/style/style";

const index = ({ title, offers }) => {
  return (
    <>
      <div className={`${flexStyle.flexBetween} mb-5`}>
        <h1>{title} </h1>
        <div className={`${flexStyle.flexStart}`}>
          <img src={suv} alt="" className="icon-size" />
          <p className="gray-text px-2">{offers} </p>
          <p className="gray-text">offers</p>
        </div>
      </div>

      <div className={flexStyle.flexBetween}>
        <div className={flexStyle.flexStart}>
          <img src={sort} alt="" className="icon-size-md" />
          <p className="me-2">Sort by:</p>
          <div>
            <DropdownToggle value={DropdownLinks} width={"input-style-width"} />
          </div>
        </div>
        <div className={flexStyle.flexCenterRowSmShow}>
          <img src={listicon} alt="" className="icon-size me-2" />
          <img src={gridicon} alt="" className="icon-size" />
        </div>
      </div>
    </>
  );
};

export default index;
