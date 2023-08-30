import React, { useState } from "react";
import { PagePath } from "src/components/Model";
import {
  Specification,
  Accordion,
  SingleContactInfo,
  SingleCarRightContent,
} from "src/components/CarSinglePageCom";
import {
  SpecificationData,
  FeaturesData,
  ContactInfoData,
} from "src/data/constant";
import { flexStyle } from "src/style/style";
import { arrowgray } from "src/assets/icons";
import { car1 } from "src/assets/img";

const index = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <section className="container-fluid pb-5 pt-130">
        {/* heading */}
        <PagePath link={"Mercedes-Benz E 400 Cabriolet"}>
          <p className="gray-text fs-6">Used cars</p>
          <div className={`${flexStyle.flexStart} icon-size-md mt-1 mx-1`}>
            <img src={arrowgray} alt="" className="w-100" />
          </div>
        </PagePath>
        <div className={`${flexStyle.flexBetween} mb-3 `}>
          <h1>Mercedes-Benz E 400 Cabriolet</h1>
          <div className={flexStyle.flexCenter}>
            <div className="px-2 py-1 rounded-circle gray-background me-2 ">
              <i className="fa-solid fa-heart" style={{ color: "#ffffff" }}></i>
            </div>
            <div className="px-2 py-1 rounded-circle gray-background ">
              <i
                className="fa-solid fa-share-nodes "
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>
        </div>

        <div className="row ">
          {/* left content */}
          <div className="col-12 col-md-7">
            <img src={car1} alt="" className="w-100 rounded-4" />
            {/* Specification */}
            <div className="mt-4">
              <Specification
                value={SpecificationData}
                title={"Specification"}
              />
            </div>
            {/* features */}
            <div className="my-4">
              <h3 className="mb-3">Features</h3>
              <div className="accordion" id="accordionExample">
                <Accordion value={FeaturesData} />
              </div>
            </div>
            {/* description */}
            <div className="pb-4 border-bottom-gray">
              <h4 className="mb-3">Seller's Description</h4>
              <div className={`${toggle ? "h-fit" : "heigth-200"}`}>
                <p className="gray-text">
                  Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet
                  non scelerisque turpis sed etiam ultrices. Blandit mollis
                  dignissim egestas consectetur porttitor. Vulputate dolor
                  pretium, dignissim eu augue sit ut convallis. Lectus est,
                  magna urna feugiat sed ultricies sed in lacinia. Fusce potenti
                  sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper
                  arcu. Asperiores eos molestias, aspernatur assumenda vel
                  corporis ex, magni excepturi totam exercitationem quia
                  inventore quod amet labore impedit quae distinctio? Officiis
                  blanditiis consequatur alias, atque, sed est incidunt
                  accusamus repudiandae tempora repellendus obcaecati delectus
                  ducimus inventore tempore harum numquam autem eligendi culpa.
                </p>
              </div>
              <p className="orange-text pointer" onClick={toggler}>
                See more...
              </p>
            </div>
            {/* contact infro */}
            <div>
              <SingleContactInfo value={ContactInfoData} />
            </div>
          </div>
          {/* right content */}
          <div className="col-12 col-md-5">
            {/* heading */}
            <div className="position-sticky top100 ">
              <SingleCarRightContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
