import React, { useEffect, useState } from "react";
import { HiOutlineMail, HiOutlineDocument } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import styles from "../Styles/Options.module.css";
import resume from "../Other/resume.pdf";

function Mail() {
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

function Resume() {
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

function LinkedIn() {
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

function GitHub() {
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
