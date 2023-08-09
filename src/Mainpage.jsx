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
      <Hero />
      <Filter />
      <TopOffers />
      <Brands />
      <FindIdApart />
      <LatestCars />
      <AutoMarket />
    </>
  );
};

export default Mainpage;
