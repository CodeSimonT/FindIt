import React from "react";
import { FilterLinks } from "src/data/constant";
import { search } from "src/assets/icons";
import { flexStyle } from "src/style/style";
import { Dropdown, ButtonStyle } from "src/components/Model";

const Filter = () => {
  return (
    <>
      <div className="container-fluid">
        {/* buttons */}
        <div className="d-flex ">
          <ButtonStyle
            text={"New"}
            style={"white-background me-2 py-2"}
            textcolor={"orange-text"}
          />
          <ButtonStyle
            text={"Used"}
            style={"gray-background me-2 py-2"}
            textcolor={"white-text"}
          />
        </div>
        {/* filter */}
        <div className="container-fluid mt-3 border-style-gray">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 filter-backgroud-color rounded max-width">
            {/* search */}
            <div className="col mb-2 mb-lg-0">
              <div
                className={`${flexStyle.flexStart} my-0 my-lg-3 py-3 py-lg-1 border-right`}
              >
                <div className={`${flexStyle.flexCenter} icon-size me-1`}>
                  <img src={search} alt="" className="w-100" />
                </div>
                <input
                  type="text"
                  placeholder="Keywords..."
                  className="w-100"
                />
              </div>
            </div>
            {/* dropdowns */}
            {FilterLinks.map((item, index) => (
              <div className="col mb-2 mb-lg-0" key={item.id}>
                <div
                  className={`${flexStyle.flexStart}  ${
                    index === FilterLinks.length - 1 ? "" : "border-right"
                  } my-0 my-lg-3 py-3 py-lg-1 `}
                >
                  <Dropdown value={item} fs={"fs-5"} me={"me-3"} />
                </div>
              </div>
            ))}
            <div className="col pb-2 pb-sm-0 my-auto">
              <p
                className={`${flexStyle.flexCenter} py-2 nav-button-style fs-5`}
              >
                Search
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
