import styles from "./icons.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Icons() {
  return (
    <div className={styles.icons}>
      <span></span>
      <a href="https://github.com/hendraustin">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/hendricks-austin/">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="mailto: hendraustin@gmail.com">
        <MdOutlineMail className={styles.icon} />
      </a>
    </div>
  );
}