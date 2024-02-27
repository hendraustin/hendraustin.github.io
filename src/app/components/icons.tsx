"use client";
import React, { useEffect, useState } from "react";
import styles from "./icons.module.css";
import { FaCat, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Icons() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    let modal = document.getElementById("modal");
    modal?.addEventListener("click", function () {
      this.style.display = "none";
      setModalOpen(false);
    });
  }, []);

  return (
    <div className={styles.icons}>
      <span></span>
      <a href="https:/hendraustin/github.com/" className={styles.icon} id="githubIcon">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hendricks-austin" className={styles.icon}>
        <FaLinkedin />
      </a>
      <a href="mailto: hendraustin@gmail.com" className={styles.icon}>
        <MdOutlineMail />
      </a>
      <a className={styles.cat_icon} onClick={handleClick}>
        <FaCat />
      </a>
      <div className={styles.modal} id="modal" style={{ display: modalOpen ? "block" : "none" }}>
        <img className={styles.modal_content} src="../../static/pam_cat.jpeg" />
      </div>
    </div>
  );
}
