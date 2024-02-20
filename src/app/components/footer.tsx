import styles from "./footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span></span>
      <a href="https://github.com/hendraustin">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hendricks-austin/">
        <FaLinkedin />
      </a>
      <a href="mailto: hendraustin@gmail.com">
        <MdOutlineMail />
      </a>
    </div>
  );
}
