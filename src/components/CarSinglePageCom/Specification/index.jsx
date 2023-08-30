import React from "react";

const index = ({ title, value }) => {
  return (
    <>
      <div>
        <h3 className="mb-4 fw-bold">{title}</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            {value.map(
              (item, index) =>
                index < 6 && (
                  <div className="d-flex mb-2" key={index}>
                    <p className="text-white me-1 fw-bold ">{item.title}:</p>
                    <p className="gray-text fs-6">{item.content}</p>
                  </div>
                )
            )}
          </div>
          <div className="col-12 col-lg-6">
            {value.map(
              (item, index) =>
                index > 5 && (
                  <div className="d-flex mb-2" key={index}>
                    <p className="text-white me-1 fw-bold">{item.title}:</p>
                    <p className="gray-text">{item.content}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
