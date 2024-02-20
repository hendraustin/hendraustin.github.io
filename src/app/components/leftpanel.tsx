import Icons from "./icons";
import styles from "./panel.module.css";

export default function LeftPanel() {
  return (
    <div className={styles.left_panel}>
      <h1>Austin Hendricks</h1>
      <h2>Software Engineer</h2>
      <p>Doing my best to do my best.</p>
      <div className={styles.sections}>
        <li>
          <a href="#top">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
      </div>
      <Icons />
    </div>
  );
}
