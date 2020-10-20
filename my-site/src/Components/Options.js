import React from "react";
import { HiOutlineMail, HiOutlineDocument } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "../Styles/Options.module.css";

function Mail() {
  return (
    <div className={styles.option}>
      <HiOutlineMail size={40} />
      <div className={styles.optionText}>Send me an email</div>
    </div>
  );
}

function Resume() {
  return (
    <div className={styles.option}>
      <HiOutlineDocument size={40} />
      <div className={styles.optionText}>Download my resume</div>
    </div>
  );
}

function GitHub() {
  return (
    <div className={styles.option}>
      <AiOutlineGithub size={40} />
      <div className={styles.optionText}>Check out my GitHub</div>
    </div>
  );
}

export default function Options() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Mail />
        <Resume />
        <GitHub />
      </div>
      <hr />
    </div>
  );
}
