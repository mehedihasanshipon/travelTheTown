import React from "react";
import "./MatchRides.css";

const MatchRides = (props) => {
  const { name, passanger, bill, image, userImg } = props.ride;
  return (
    <div className="rides-info">
      <img src={image} alt="" />
      <h6> {name} </h6>
      <h6>
        {" "}
        <span className="avatar">
          <img src={userImg} alt="" />
        </span>{" "}
        {passanger}{" "}
      </h6>
      <h6> {bill} </h6>
    </div>
  );
};

export default MatchRides;
