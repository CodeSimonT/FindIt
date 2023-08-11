import React from "react";
import CardColumn from "../../middleware/CardColumn";
import CardRow from "../../middleware/CardRow";
import Title from "../../middleware/Title";
import { TopOffersData } from "../../constants/contant";

const TopOffers = () => {
  const firstItem = TopOffersData[0];
  const secondItem = TopOffersData[1];
  const thirdItem = TopOffersData[2];
  return (
    <>
      <section className="container-fluid py-5">
        {/* heading */}
        <Title title={"Top Offers"} value={"View all offers"} />
        {/* grid container */}
        <div className="row gap-4 gap-lg-0">
          {/* left content */}
          <div className="col-12 col-lg-6">
            <CardColumn data={firstItem} />
          </div>
          {/* right content */}
          <div className="col-12 col-lg-6">
            <div className="row row-cols-2  gap-4">
              <div className="col-12  h-100">
                <CardRow data={secondItem} />
              </div>
              <div className="col-12  h-100">
                <CardRow data={thirdItem} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopOffers;
