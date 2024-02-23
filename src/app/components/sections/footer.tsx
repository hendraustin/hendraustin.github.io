import styles from "./sections.module.css";

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <p>
        Designed in Canva and coded in Visual Studio Code. Built with Next.js and deployed with
        Vercel. Inspired by Brittany Chiang!
      </p>
    </div>
  );
}
