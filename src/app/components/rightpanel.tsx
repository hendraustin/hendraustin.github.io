import styles from "./panel.module.css";
import About from "./sections/about";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Projects from "./sections/projects";

export default function RightPanel() {
  return (
    <div id="top" className={styles.right_panel}>
      <div id="container">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
