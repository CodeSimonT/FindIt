import React from "react";
import { CardRow } from "src/components/Model";
import { flexStyle } from "src/style/style";
import { LatestCarData } from "src/data/constant";

const index = () => {
  return (
    <>
      <div>
        {/* heading */}
        <div className={`${flexStyle.flexBetween} mb-4`}>
          <div className={flexStyle.flexStart}>
            <h2>Wishlist</h2>
            <p className="gray-background py-2 px-3 rounded-3 ms-3 ">3</p>
          </div>
          <div className={flexStyle.flexCenterRow}>
            <div>
              <i
                className="fa-solid fa-xmark fa-lg me-2"
                style={{ color: "#b1afb6" }}
              ></i>
            </div>
            <p className="fw-bold gray-text">Clear all</p>
          </div>
        </div>
        {/* cards */}
        <div className="row mt-3">
          {LatestCarData.map((item) => (
            <div className="col-12 mb-3" key={item.id}>
              <CardRow data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
