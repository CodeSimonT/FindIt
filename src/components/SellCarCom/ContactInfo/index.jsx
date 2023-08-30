import React, { useState } from "react";
import { Caption, InputText, InputNumber } from "..";
const index = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "",
  });

  return (
    <>
      <div className="row">
        <div className=""></div>
        <div className="col-6">
          <Caption title={"First name"} />
          <InputText />
        </div>
      </div>
    </>
  );
};

export default index;
