import styles from "./panel.module.css";
import About from "./sections/about";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

export default function RightPanel() {
  return (
    <div className={styles.right_panel}>
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
