import React from "react";
import { flexStyle } from "src/style/style";
import { arrowbottom } from "src/assets/icons";

const index = ({ value }) => {
  return (
    <>
      {value.map((item, index) => (
        <div
          className="accordion-item transparent-bg accordion-border-style"
          key={item.id}
        >
          <h2 className="accordion-header transparent-bg">
            <div
              className={`${flexStyle.flexBetween} gray-text p-3 `}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.itemId}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5 className="fs-bold">{item.title}</h5>
              <img src={arrowbottom} alt="" className="icon-size-md" />
            </div>
          </h2>
          <div
            id={item.itemId}
            className={`${
              index == 1 ? "show" : ""
            } accordion-collapse collapse `}
            aria-labelledby="headingOne"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-12 col-lg-6">
                  {item.list.map(
                    (item, index) =>
                      index < 6 && (
                        <div className="d-flex mb-2" key={item.id}>
                          <li className=" gray-text style-list  ms-2  ">
                            {item.title}
                          </li>
                        </div>
                      )
                  )}
                </div>
                <div className="col-12 col-lg-6">
                  {item.list.map(
                    (item, index) =>
                      index > 5 && (
                        <div className="d-flex mb-2" key={item.id}>
                          <li className=" gray-text style-list  ms-2  ">
                            {item.title}
                          </li>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
