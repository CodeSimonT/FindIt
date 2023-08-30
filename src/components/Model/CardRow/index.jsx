import React from "react";
import { location, automatic, petrol, speedometer } from "src/assets/icons";
import Numberformat from "src/components/PureFuctions/NumberFormat.js";

const CardRow = ({ data }) => {
  return (
    <>
      <div className="card d-flex flex-column flex-sm-row card-background-color h-100 ">
        <div className=" col-sm-5 ">
          <img src={data.image} alt="" className="image-contain " />
        </div>
        <div className=" col-sm-7 container-fluid">
          <div className="text-white pb-0 d-flex justify-content-between mt-3">
            <p className="mb-0">{data.year} </p>
            <div className="form-check text-white">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Compare
              </label>
            </div>
          </div>
          <div className="text-white-50 pt-3 pb-0 pb-sm-5 fontBold">
            <h6 className="mb-2 fw-bold">{data.car} </h6>
            <h6 className="orange-text fw-bold mb-2">
              ${Numberformat(data.price)}{" "}
            </h6>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-location-dot me-1"></i>
              <p>{data.location} </p>
            </div>
          </div>
          <div className="mt-5 pb-3 mx-3  ">
            <div className="row ">
              <div className="col-4 px-1  ">
                <div className="text-center py-2 rounded dark-background-color w-100 h-100 ">
                  <img src={speedometer} alt="" className="icon-size" />
                  <p className="topOfferTextSize">{data.RD} </p>
                </div>
              </div>
              <div className="col-4 px-1  ">
                <div className="text-center py-2 rounded dark-background-color w-100 h-100 ">
                  <img src={automatic} alt="" className="icon-size" />
                  <p className="topOfferTextSize">{data.engine} </p>
                </div>
              </div>
              <div className="col-4 px-1 ">
                <div className="text-center py-2 rounded dark-background-color w-100 h-100 ">
                  <img src={petrol} alt="" className="icon-size" />
                  <p className="topOfferTextSize">{data.fuel} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRow;
