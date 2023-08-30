import React from "react";
import { TopOffersData, LatestCarData } from "src/data/constant";
import {
  CardRow,
  PagePath,
  CardFilter,
  ContentHeading,
} from "src/components/Model";

const index = () => {
  const data = [...TopOffersData, ...LatestCarData];

  return (
    <>
      <section className="py-5 container-fluid">
        <div className="row pt-5">
          {/* filter */}
          <div className="col-3 mt-5 d-none d-lg-block">
            <CardFilter />
          </div>
          {/* content */}
          <div className="col-12 col-lg-9 mt-5">
            <PagePath link={"List view"} />
            <ContentHeading title={"Used cars"} offers={456} />
            <div className="row mt-4">
              {data.map((item, index) => (
                <div className="col-12 mb-4" key={index}>
                  <CardRow data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
