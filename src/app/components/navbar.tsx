import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.topnav}>
      <h1>Austin Hendricks </h1>
      <a href="#about">About</a>
      <a href="#portfolio">Porfolio</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
