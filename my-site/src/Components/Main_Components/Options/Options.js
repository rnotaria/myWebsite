import React from "react";
import styles from "../../../Styles/Options.module.css";
import Mail from "./Mail";
import Resume from "./Resume";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Slide from "../../Helper_Components/Slide";

export default function Options() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Slide delay={0.3} time={1}>
          <Mail />
        </Slide>
        <Slide delay={0.2} time={1}>
          <Resume />
        </Slide>
        <Slide delay={0.1} time={1}>
          <LinkedIn />
        </Slide>
        <Slide delay={0} time={1}>
          <GitHub />
        </Slide>
      </div>
      <hr />
    </div>
  );
}
