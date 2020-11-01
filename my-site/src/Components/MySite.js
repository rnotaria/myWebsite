import React from "react";
import styles from "../Styles/MySite.module.css";
import CoverImage from "./Main_Components/CoverImage";
import Options from "./Main_Components/Options/Options";
import Profile from "./Main_Components/Profile";
import Projects from "./Main_Components/Projects/Projects";
import Construction from "./Main_Components/Construction";

export default function MySite() {
  return (
    <div>
      <CoverImage />
      <Options />
      <div className={styles.contentContainer}>
        <Profile />
        <Projects />
      </div>
    </div>
  );
}
