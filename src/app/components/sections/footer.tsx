import styles from "./sections.module.css";

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <p>
        Designed in <a href="https://www.canva.com/">Canva</a> and coded in{" "}
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>. Built with{" "}
        <a href="https://nextjs.org/">Next.js</a> and deployed with{" "}
        <a href="https://vercel.com/">Vercel</a>. Heavily inspired by{" "}
        <a href="https://brittanychiang.com/">Brittany Chiang</a>!
      </p>
    </div>
  );
}
