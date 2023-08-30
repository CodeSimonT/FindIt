import React, { useState } from "react";
import { CheckBox, Title } from "src/components/Model";
import SellCarCard from "../SellCarCard";
import { SellCarData } from "src/data/constant";

const index = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const targetId = event.target.id;

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [targetId]: !prevCheckedItems[targetId],
    }));
    console.log(checkedItems);
  };
  console.log();
  return (
    <>
      <SellCarCard title={"Features"} icon={"fa-car fa-lg me-3"}>
        {/* exterior */}
        <h5 className="fw-bold mt-4 mb-2">Exterior</h5>
        <div className="row row-cols-3">
          {SellCarData.features.exterior.map((item) => (
            <div className="col mb-1" key={item.id}>
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkedItems[item.title] || false}
                  id={item.title}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={item.title}>
                  {item.title}
                </label>
              </div>
            </div>
          ))}
        </div>
        {/* Interior */}
        <h5 className="fw-bold mt-4 mb-2">Interior</h5>
        <div className="row row-cols-3">
          {SellCarData.features.interior.map((item) => (
            <div className="col mb-1" key={item.id}>
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkedItems[item.title] || false}
                  id={item.title}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={item.title}>
                  {item.title}
                </label>
              </div>
            </div>
          ))}
        </div>
        {/* safety */}
        <h5 className="fw-bold mt-4 mb-2">Safety</h5>
        <div className="row row-cols-3">
          {SellCarData.features.Safety.map((item) => (
            <div className="col mb-1" key={item.id}>
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkedItems[item.title] || false}
                  id={item.title}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={item.title}>
                  {item.title}
                </label>
              </div>
            </div>
          ))}
        </div>
      </SellCarCard>
    </>
  );
};

export default index;
