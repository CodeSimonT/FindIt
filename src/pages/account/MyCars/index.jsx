import React from "react";
import { flexStyle } from "src/style/style";
import { ButtonStyle, CardRow } from "src/components/Model";
import { LatestCarData } from "src/data/constant";

const index = () => {
  return (
    <>
      <div>
        {/* heading */}
        <div className={`${flexStyle.flexBetween} mb-4`}>
          <h2>My Cars</h2>
          <div className={flexStyle.flexCenterRow}>
            <div>
              <i
                className="fa-solid fa-trash me-2"
                style={{ color: "#b1afb6" }}
              ></i>
            </div>
            <p className="fw-bold gray-text">Delete all</p>
          </div>
        </div>
        <p>Here you can see your car offers and edit them easily.</p>
        {/* buttons */}
        <div className={`${flexStyle.flexStart} mt-4 pb-3 border-bottom-gray`}>
          <ButtonStyle
            text={"Published"}
            style={`white-background py-2 me-3 ${flexStyle.flexStart} `}
            textcolor={"orange-text"}
          >
            <i
              className="fa-solid fa-clipboard me-2"
              style={{ color: "#fd5631" }}
            ></i>
          </ButtonStyle>
          <ButtonStyle
            text={"Draft"}
            style={`gray-background py-2 me-3 ${flexStyle.flexStart} `}
            textcolor={"white-text"}
          >
            <i
              className="fa-solid fa-note-sticky me-2"
              style={{ color: "white" }}
            ></i>
          </ButtonStyle>
          <ButtonStyle
            text={"Archived"}
            style={`gray-background py-2 me-3 ${flexStyle.flexStart} `}
            textcolor={"white-text"}
          >
            <i
              className="fa-solid fa-box-archive me-2"
              style={{ color: "white" }}
            ></i>
          </ButtonStyle>
        </div>
        {/* cards */}
        <div className="row mt-4">
          {LatestCarData.map((item) => (
            <div className="col-12 mb-4" key={item.id}>
              <CardRow data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
