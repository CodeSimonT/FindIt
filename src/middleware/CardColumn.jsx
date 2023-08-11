import React from "react";
import { flexStyle } from "../style/style";
import { location, automatic, petrol, speedometer } from "../assets/icons";
import { car1, car2, car3 } from "../assets/img";
const CardColumn = ({ data }) => {
  return (
    <>
      <div className="card card-background-color h-100">
        <div className="card-img-top position-relative radius-top">
          <img src={data.image} alt="" className="w-100 radius-top" />
        </div>
        <div className="card-body">
          <div className="text-white pb-0 d-flex justify-content-between">
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
          <div className="text-white-50 pt-3 pb-3 fontBold">
            <h5 className="mb-2">{data.car}</h5>
            <h5 className="orange-text mb-2">{data.price} </h5>
            <div className="d-flex align-items-center">
              <img src={location} alt="" className="icon-size" />
              <p>{data.location} </p>
            </div>
          </div>
        </div>
        <div className="card-footer pt-3 pb-3 mx-3  border-0">
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
                <p className="topOfferTextSize">{data.fuel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardColumn;
