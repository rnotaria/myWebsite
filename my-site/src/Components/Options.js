import React, { useEffect, useState } from "react";
import { HiOutlineMail, HiOutlineDocument } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "../Styles/Options.module.css";

function Mail() {
  const [text, setText] = useState("Send me an email");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
        setText("Send me an email");
      }, 5000);
    }
  });

  if (copied) {
    return (
      <div className={styles.optionContainer}>
        <HiOutlineMail
          className={styles.optionIcon}
          size={40}
          onClick={() => {
            navigator.clipboard.writeText("rnotaria776@gmail.com");
            setText("Copied!");
          }}
        />
        <div className={styles.optionText}>{text}</div>
      </div>
    );
  }

  return (
    <div className={styles.optionContainer}>
      <HiOutlineMail
        className={styles.optionIcon}
        size={40}
        onMouseEnter={() => setText("Click to copy email")}
        onMouseLeave={() => setText("Send me an email")}
        onClick={() => {
          navigator.clipboard.writeText("rnotaria776@gmail.com");
          setText("Copied!");
          setCopied(true);
        }}
      />
      <div className={styles.optionText}>{text}</div>
    </div>
  );
}

function Resume() {
  return (
    <div className={styles.optionContainer}>
      <HiOutlineDocument className={styles.optionIcon} size={40} />
      <div className={styles.optionText}>Download my resume</div>
    </div>
  );
}

function GitHub() {
  return (
    <div className={styles.optionContainer}>
      <AiOutlineGithub className={styles.optionIcon} size={40} />
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
