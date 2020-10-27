import React from "react";
import styles from "../../../Styles/Options.module.css";
import { HiOutlineDocument } from "react-icons/hi";
import resume from "../../../Other/resume.pdf";

export default function Resume() {
  return (
    <div className={styles.optionContainer}>
      <HiOutlineDocument
        className={styles.optionIcon}
        size={40}
        onClick={() => window.open(resume, "_blank")}
      />
      <div
        className={styles.optionText}
        onClick={() => window.open(resume, "_blank")}
      >
        Download my resume
      </div>
    </div>
  );
}