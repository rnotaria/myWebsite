import React from "react";
import styles from "../../../Styles/Options.module.css";
import Mail from "./Mail"
import Resume from "./Resume"
import LinkedIn from "./LinkedIn"
import GitHub from "./GitHub"


export default function Options() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Mail />
        <Resume />
        <LinkedIn />
        <GitHub />
      </div>
      <hr />
    </div>
  );
}
