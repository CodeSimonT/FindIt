import React from "react";

const index = ({ stars }) => {
  const maxStars = 5;
  const filledStars = stars;
  const emptyStars = maxStars - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <i
          key={index}
          className="fa-solid fa-star"
          style={{ color: "#fdbc31" }}
        ></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i
          key={filledStars + index}
          className="fa-solid fa-star"
          style={{ color: "#b1afb6" }}
        ></i>
      ))}
    </div>
  );
};

export default index;
