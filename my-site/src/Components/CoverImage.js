import React from "react";
import styles from "../Styles/CoverImage.module.css";
import skyline from "../images/skyline.jpg";

var imageStyle = {
  width: "100%",
  height: "50vh",
  backgroundImage: `url(${skyline})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function CoverImage() {
  return (
    <div style={imageStyle} className={styles.name}>
      <span>Hi, I'm Rushi Notaria</span>
    </div>
  );
}
