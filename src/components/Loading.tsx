import React from "react";
import Icons from "../assets/svg";
import { FallingLines } from "react-loader-spinner";

const Loading = () => {
  const heartStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60vh",
    animation: "pulse 1.5s infinite", // Define the animation inline
  };
  return (
    <div style={heartStyle}>
      <FallingLines color='#D10121' />
    </div>
  );
};

export default Loading;
