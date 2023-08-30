import React from "react";
import { flexStyle } from "src/style/style";
import { arrowwhite } from "src/assets/icons";
import { AutoMarketItem } from "src/data/constant";

const AutoMarket = () => {
  return (
    <>
      <section className="container-fluid py-5">
        <div className="card-background-color rounded-2 p-3 p-lg-5">
          <div className="row  ">
            {/* left content */}
            <div
              className={`${flexStyle.flexCenter} col-12 col-sm-3 my-5 my-sm-0`}
            >
              <div>
                <h1>Auto Market</h1>
                <p className="fs-5 mt-2 gray-text">
                  Choose the best for your car!
                </p>
                <div className={`${flexStyle.flexStart} mt-4 `}>
                  <div className={`${flexStyle.flexCenter} nav-button-style`}>
                    <p className="fs-5">Shop</p>
                    <div className="icon-size">
                      <img src={arrowwhite} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right content */}
            <div className={`${flexStyle.flexCenter} col-12 col-sm-9`}>
              <div className="row">
                {AutoMarketItem.map((item) => (
                  <div
                    className={` col-6 col-lg-3 px-3 px-sm-5 px-lg-3`}
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="w-100" />
                    <h5 className="text-center mt-2">{item.title} </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoMarket;
