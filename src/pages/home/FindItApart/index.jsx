import React from "react";
import { FindPart1, FindPart2 } from "src/data/constant";
import { Title } from "src/components/Model";
import { FindItLoop } from "src/components/FinditLoopCom";
import { carIcon } from "src/assets/img";

const FindItApart = () => {
  return (
    <>
      <section className="container-fluid py-4">
        {/* heading */}
        <Title
          title={"What sets Finder apart?"}
          value={"How to sell cars on Finder"}
        />
        <div className="row py-3">
          <div className="col-12 col-sm-6 col-lg-5">
            {FindPart1.map((item) => (
              <div key={item.id}>
                <FindItLoop
                  data={item}
                  text={"text-start text-lg-end"}
                  title={"justify-content-start justify-content-lg-end"}
                  imageleft={"d-block d-lg-none"}
                  imageright={"d-none d-lg-block"}
                />
              </div>
            ))}
          </div>
          <div
            className={`d-none d-lg-flex justify-content-center align-items-center col-2 `}
          >
            <img src={carIcon} alt="" className="w-75" />
          </div>
          <div className="col-12 col-sm-6 col-lg-5">
            {FindPart2.map((item) => (
              <div key={item.id}>
                <FindItLoop
                  data={item}
                  text={"text-start"}
                  title={"justify-content-start"}
                  imageleft={"d-block"}
                  imageright={"d-none"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FindItApart;
