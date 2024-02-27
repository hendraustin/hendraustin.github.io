"use client";
import styles from "./icons.module.css";
import { FaCat, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Icons() {
  return (
    <div className={styles.icons}>
      <span></span>
      <a href="https://github.com/hendraustin" className={styles.icon}>
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hendricks-austin/" className={styles.icon}>
        <FaLinkedin />
      </a>
      <a href="mailto: hendraustin@gmail.com" className={styles.icon}>
        <MdOutlineMail />
      </a>
      <a href="../../static/pam_cat.jpeg" className={styles.cat_icon}>
        <FaCat />
      </a>
    </div>
  );
}
