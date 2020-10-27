import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "../../../Styles/Options.module.css";

export default function GitHub() {
  return (
    <div className={styles.optionContainer}>
      <AiOutlineGithub
        className={styles.optionIcon}
        size={40}
        onClick={() => window.open("https://github.com/rnotaria", "_blank")}
      />
      <div
        className={styles.optionText}
        onClick={() => window.open("https://github.com/rnotaria", "_blank")}
      >
        Check out my GitHub
      </div>
    </div>
  );
}
