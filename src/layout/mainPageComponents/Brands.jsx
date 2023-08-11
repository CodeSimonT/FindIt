import React from "react";
import { BrandsLogo } from "../../constants/contant";
import { flexStyle } from "../../style/style";
const Brands = () => {
  return (
    <>
      <section className="container-fluid pb-4">
        <div className="row ">
          {BrandsLogo.map((item) => (
            <div
              className={`${flexStyle.flexCenter} col-3 col-md-2 col-lg-1 pb-3 `}
              key={item.id}
            >
              <img src={item.logo} alt="" className="icon-md w-50" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Brands;
