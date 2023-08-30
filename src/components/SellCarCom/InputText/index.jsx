import React from "react";

const InputText = ({ placeholder, value, onChange, inputDesign }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <>
      <div className={`${inputDesign}`}>
        <input
          type="text"
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
