import React from "react";
import Calculations from "./Calculations";

const Conversion = (props) => {
  const { type } = props;

  return (
    <>
      <div>
        {type === "Length" ? (
          <Calculations type="Length" />
        ) : type === "Temperature" ? (
          <Calculations type="Temperature" />
        ) : type === "Weight" ? (
          <Calculations type="Weight" />
        ) : type === "Volume" ? (
          <Calculations type="Volume" />
        ) : type === "Area" ? (
          <Calculations type="Area" />
        ) : type === "Land" ? (
          <Calculations type="Land" />
        ) : (
          <p>No Type Assigned</p>
        )}
      </div>
    </>
  );
};

export default Conversion;
