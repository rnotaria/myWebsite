import React from "react";
import styles from "../Styles/Profile.module.css";
import profilePic from "../images/profilePic.jpg";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Rushi Notaria</div>
      <div className={styles.subtitle}>
        Software Engineer at Collins Aerospace | University of Illinois graduate
      </div>
      <img src={profilePic} alt={"Profile Pic"} width={240} height={300} />
    </div>
  );
}
