import React from "react";

const InputText = ({ placeholder, value, onChange, inputDesign }) => {
  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    onChange(newValue);
  };
  return (
    <>
      <div className={`${inputDesign}`}>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          placeholder={placeholder} // Use placeholder instead of value
          className="border-gray rounded-3 w-100 px-3 py-2"
        />
      </div>
    </>
  );
};

export default InputText;
