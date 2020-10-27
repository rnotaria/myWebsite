import React from "react";
import styles from "../../Styles/Profile.module.css";
import profilePic from "../../Other/images/profilePic.jpg";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Rushi Notaria</div>
      <div className={styles.subtitle}>
        Software Engineer | University of Illinois graduate
      </div>
      <div className={styles.container2}>
        <img
          className={styles.pic}
          src={profilePic}
          alt={"Profile Pic"}
          width={240}
          height={300}
        />
        <div className={styles.profile}>
          <h3 className={styles.profileHeader}>Profile: </h3>
          <div className={styles.profileText}>
            I am a software engineer at Collins Aerospace where I develop code
            for display applications on search-and-rescue helicopters. During my
            time at Collins, I have had the opportunity of working on several
            projects and learned how to work effectively as a team to meet
            strict deadlines.
          </div>
          <div className={styles.profileText}>
            During my freetime, I love learning anything and everything related
            to astronomy from black holes to supernovae. I also enjoy creating
            random Arduino projects and automating day-to-day tasks with Python.
          </div>
        </div>
      </div>
    </div>
  );
}