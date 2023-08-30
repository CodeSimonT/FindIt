import React from "react";
import { LatestCarData } from "src/data/constant";
import { CardColumn, Title } from "src/components/Model";

const LatestCars = () => {
  return (
    <>
      <section className="container-fluid">
        <Title title={"Latest Cars"} value={"View all"} />
        <div className="row">
          {LatestCarData.map((item, index) => (
            <div
              className={`col-12 col-md-4 ${
                index === LatestCarData.length - 1
                  ? "col-sm-12"
                  : "col-sm-6 mb-4 mb-md-0"
              }  `}
              key={item.id}
            >
              <CardColumn data={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestCars;
