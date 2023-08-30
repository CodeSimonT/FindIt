import React from "react";

const FindItLoop = ({ data, text, title, imageleft, imageright }) => {
  return (
    <>
      <div className={`${text} my-5 `}>
        {/* title */}
        <div className={`${title} d-flex mb-2`}>
          <img src={data.Image} alt="" className={`${imageleft} icon-size`} />
          <h4 className={`${text} px-2`}>{data.title}</h4>
          <img src={data.Image} alt="" className={`${imageright} icon-size`} />
        </div>
        {/* text */}
        <p className="px-4">{data.text}</p>
      </div>
    </>
  );
};

export default FindItLoop;
