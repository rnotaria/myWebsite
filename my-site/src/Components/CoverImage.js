import React from "react";
import skyline from "../images/skyline.jpg";

var imageStyle = {
  width: "100%",
  height: "50vh",
  backgroundImage: `url(${skyline})`,
  backgroundSize: 'cover',
  backgroundPosition: "center"
}

export default function CoverImage() {
  return (
    <div style={imageStyle} />
  )
}