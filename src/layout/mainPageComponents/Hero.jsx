import React from "react";
import { hero } from "../../assets/img";
import { flexStyle } from "../../style/style";
const Hero = () => {
  return (
    <>
      <section className={`hero-height`}>
        {/* grid container */}
        <div className="row m-0 p-0 mt-5">
          {/* text content */}
          <div
            className={`${flexStyle.flexCenterColumn} flex col-14 col-lg-4 text-center text-lg-start mb-5 mb-lg-0`}
          >
            <h1 className="mb-3">Easy way to find the right car</h1>
            <p className="">
              FindIt is a leading digital marketplace for the automotive
              industry that connects car shoppers with sellers.
            </p>
          </div>
          {/* image */}
          <div className="col-12 col-lg-8 ">
            <img src={hero} alt="" className="w-100" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
