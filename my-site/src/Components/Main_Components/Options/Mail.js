import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import styles from "../../../Styles/Options.module.css";

export default function Mail() {
  const [text, setText] = useState("Send me an email");
  const [copied, setCopied] = useState(false);

  const onClickCopied = () => {
    navigator.clipboard.writeText("rnotaria776@gmail.com");
    setText("Copied!");
  };
  const onClickMail = () => {
    navigator.clipboard.writeText("rnotaria776@gmail.com");
    setText("Copied!");
    setCopied(true);
  };

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
        setText("Send me an email");
      }, 5000);
    }
  }, [copied]);

  if (copied) {
    return (
      <div className={styles.optionContainer}>
        <HiOutlineMail
          className={styles.optionIcon}
          size={40}
          onClick={() => onClickCopied()}
        />
        <div className={styles.optionText} onClick={() => onClickCopied}>
          {text}
        </div>
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
        onClick={() => onClickMail()}
      />
      <div
        className={styles.optionText}
        onMouseEnter={() => setText("Click to copy email")}
        onMouseLeave={() => setText("Send me an email")}
        onClick={() => onClickMail()}
      >
        {text}
      </div>
    </div>
  );
}
