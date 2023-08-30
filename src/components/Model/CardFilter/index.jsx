import React, { useState } from "react";
import { flexStyle } from "src/style/style";
import { arrowgray, close100 } from "src/assets/icons";
import { DropdownToggle, ButtonStyle } from "src/components/Model";
import { CheckBox, RangeOutput } from "src/components/Model";

import {
  SearchHistory,
  LocationFilter,
  BodyTypes,
  Years,
  CarModelData,
  FuelType,
  TransmissionData,
  ColorData,
  SellersDat,
} from "src/data/constant";

const index = () => {
  const [maxData, setMaxData] = useState(0);
  const [minData, setMinData] = useState(0);

  const changeMax = (e) => {
    setMaxData(e.target.value);
  };
  const changeMin = (e) => {
    setMinData(e.target.value);
  };
  return (
    <>
      {/* button */}
      <div className={`${flexStyle.flexStart} mb-3`}>
        <ButtonStyle
          text={"Search New"}
          style={"gray-background me-2 py-2"}
          textcolor={"white-text"}
        />{" "}
        <ButtonStyle
          text={"Search Used"}
          style={"white-background py-2"}
          textcolor={"orange-text"}
        />
      </div>
      {/* selection */}
      <div className="py-4 border-Y">
        <div className={flexStyle.flexBetween}>
          <h5>Selection</h5>
          <p>Clear All</p>
        </div>
        <div className="d-flex flex-row flex-wrap w-100 mt-3  ">
          {SearchHistory.map((item) => (
            <div
              key={item.id}
              className={`${flexStyle.flexCenterRow} filter-backgroud-color rounded-5 py-1 px-3 me-2 mb-2`}
            >
              <p>{item.title}</p>
              <img src={close100} alt="" className="icon-size-sm ms-2" />
            </div>
          ))}
        </div>
      </div>
      {/* location */}
      <div className={`my-3 w-100 ${flexStyle.flexStartColumn}`}>
        <h5 className="mb-3">Location</h5>
        <DropdownToggle value={LocationFilter} width={"w-100"} />
      </div>
      {/* body type */}
      <div>
        <CheckBox value={BodyTypes} title={"Body Type"} />
      </div>
      {/* year */}
      <div className="py-4">
        <h5 className="mb-3">Year</h5>
        <div className="row">
          <div className="col-5">
            <DropdownToggle value={Years} width={"w-100"} />
          </div>
          <div className={`${flexStyle.flexCenter} col-2`}>
            <img src={arrowgray} alt="" className="icon-size" />
          </div>
          <div className="col-5">
            <div className="w-100">
              <DropdownToggle value={Years} width={"w-100"} />
            </div>
          </div>
        </div>
      </div>
      {/* make model */}
      <div>
        <h5 className="mb-3">Make & Model</h5>
        <DropdownToggle value={CarModelData} width={"w-100 mb-2"} />
        <DropdownToggle value={CarModelData} width={"w-100"} />
      </div>
      {/* input progress */}
      <div className="py-4">
        {/* max */}
        <h4>Price</h4>
        <div className="my-2">
          <div className="row">
            <div className="col-5">
              <RangeOutput value={maxData} me={"w-100"} title={"Max"} />
            </div>
            <div className={`${flexStyle.flexCenter} col-2`}>
              <img src={arrowgray} alt="" className="icon-size" />
            </div>
            <div className="col-5">
              <div className="w-100">
                <RangeOutput value={minData} me={"w-100"} title={"Min"} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p>Max</p>
          <input
            type="range"
            min={0}
            max={50000}
            step={1}
            onChange={changeMax}
            className="w-100"
          />
        </div>
        <div className="">
          <p>Min</p>
          <input
            type="range"
            min={0}
            max={50000}
            step={1}
            onChange={changeMin}
            className="w-100"
          />
        </div>
      </div>
      {/* fuel type */}
      <div className="mb-4">
        <CheckBox value={FuelType} title={"Fuel Type"} />
      </div>
      {/* transmission */}
      <div className="mb-4">
        <CheckBox value={TransmissionData} title={"Transmission"} />
      </div>
      {/* colors */}
      <div className="mb-4">
        <CheckBox value={ColorData} title={"Color"} />
      </div>
      {/* sellers */}
      <div className="mb-4">
        <CheckBox value={SellersDat} title={"Sellers"} />
      </div>
    </>
  );
};

export default index;
