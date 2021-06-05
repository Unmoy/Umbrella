import React from "react";

const FeaturesCard = ({ data }) => {
  const { image } = data;
  return (
    <div className="col-md-3 ps-5">
      <div className=" ">
        <img src={image} width="200" height="300" alt="" />
      </div>
    </div>
  );
};

export default FeaturesCard;
