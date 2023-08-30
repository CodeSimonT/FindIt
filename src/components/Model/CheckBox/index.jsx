import React, { useState } from "react";

const index = ({ value, title }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const targetId = event.target.id;

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [targetId]: !prevCheckedItems[targetId],
    }));
    console.log(checkedItems);
  };
  return (
    <>
      <div>
        <h5 className="mb-3">{title}</h5>
        <div className="min-hight-sm">
          {value.map((item) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
