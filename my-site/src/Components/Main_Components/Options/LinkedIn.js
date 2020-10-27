import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "../../../Styles/Options.module.css";

export default function LinkedIn() {
  return (
    <div className={styles.optionContainer}>
      <FaLinkedin
        className={styles.optionIcon}
        size={40}
        color="#0072b1"
        onClick={() =>
          window.open("https://www.linkedin.com/in/rushinotaria/", "_blank")
        }
      />
      <div
        className={styles.optionText}
        onClick={() =>
          window.open("https://www.linkedin.com/in/rushinotaria/", "_blank")
        }
      >
        View my LinkedIn
      </div>
    </div>
  );
}
