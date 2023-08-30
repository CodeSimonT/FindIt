import React, { useRef } from "react";
import { flexStyle } from "src/style/style";
const index = ({ title, children }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  return (
    <>
      {" "}
      <div>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        {/* picture upload */}
        <div
          onClick={handleClick}
          className={`${flexStyle.flexCenterColumn} gray-background rounded-3 border-dash mb-4 py-5`}
        >
          <div className="mb-2">
            <i
              className="fa-solid fa-camera fa-2xl"
              style={{ color: "#b1afb6" }}
            ></i>
          </div>
          <h5 className="fw-bolc gray-text">{title}</h5>
        </div>
        {/* text input */}
        {children}
      </div>
    </>
  );
};

export default index;
