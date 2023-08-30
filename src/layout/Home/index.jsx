import React from "react";
import {
  Hero,
  Filter,
  TopOffers,
  Brands,
  FindIdApart,
  LatestCars,
  AutoMarket,
} from "../../pages/home";

const Home = () => {
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

export default Home;
