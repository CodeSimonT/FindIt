import React from "react";
import { flexStyle } from "src/style/style";
import { DropdownToggle, ButtonStyle } from "src/components/Model";
import { StarRating } from "src/components/Model";
import { ReviewSort, ReviewsData } from "src/data/constant";

const index = () => {
  return (
    <>
      <div>
        {/* heading */}
        <div className="border-bottom-gray mb-4">
          <h4 className="">Reviews</h4>
          <p className="my-4">
            Reviews you’ve received will be visible both here and on your public
            profile.
          </p>
          <div className={`${flexStyle.flexStart} pb-4`}>
            <ButtonStyle
              text={"Reviews about you"}
              textcolor={"orange-text"}
              style={"white-background py-2 me-3"}
            />
            <ButtonStyle
              text={"Reviews about you"}
              textcolor={"white-text"}
              style={"gray-background py-2 "}
            />
          </div>
        </div>
        {/* sorter*/}
        <div className={`${flexStyle.flexBetween} mb-4`}>
          {/* sort title */}
          <div>
            <div className={flexStyle.flexStart}>
              <i
                className="fa-solid fa-star me-1"
                style={{ color: "#fdbc31" }}
              ></i>
              <h4 className="fw-bold">4,9 (32 reviews)</h4>
            </div>
          </div>
          {/* sort button */}
          <div className={flexStyle.flexCenter}>
            <i
              className="fa-solid fa-sort me-1"
              style={{ color: "#b1afb6" }}
            ></i>
            <p className="me-4">Sort by:</p>
            <DropdownToggle value={ReviewSort} />
          </div>
        </div>
        {/* body content */}
        {/* all reviews */}
        <div className="">
          {ReviewsData.map((item) => (
            <div key={item.id} className="py-4 border-bottom-gray">
              <div className={`${flexStyle.flexCenterRow} mb-3 `}>
                <div>
                  <i
                    className="fa-solid fa-user fa-2xl me-3"
                    style={{ color: "#b1afb6" }}
                  ></i>
                </div>
                <div className="w-100">
                  <div className={flexStyle.flexBetween}>
                    <h6>{item.name}</h6>
                    <p className="gray-text">{item.date} </p>
                  </div>
                  <StarRating stars={item.stars} />
                </div>
              </div>
              <p className="mb-3">{item.review}</p>
              <div className={flexStyle.flexStart}>
                <div className={`${flexStyle.flexCenterRow} border-right pe-2`}>
                  <i
                    className="fa-solid fa-thumbs-up me-2"
                    style={{ color: "#b1afb6" }}
                  ></i>
                  <p>({item.up}) </p>
                </div>
                <div className={`${flexStyle.flexCenterRow} ps-2`}>
                  <i
                    className="fa-solid fa-thumbs-down me-2"
                    style={{ color: "#b1afb6" }}
                  ></i>
                  <p>({item.down}) </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
