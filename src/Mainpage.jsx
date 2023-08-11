import React from "react";
import {
  Hero,
  Filter,
  TopOffers,
  Brands,
  FindIdApart,
  LatestCars,
  AutoMarket,
} from "./layout/mainPageComponents";

const Mainpage = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="max-width-1300">
          <Hero />
          <Filter />
          <TopOffers />
          <Brands />
          <FindIdApart />
          <LatestCars />
          <AutoMarket />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
