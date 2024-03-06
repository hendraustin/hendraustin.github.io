import styles from "./sections.module.css";

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <p>
        Hi there, I&apos;m Austin. My objective is to leverage my technical skills in a role that
        contributes to the improvement of society. I&apos;m currently looking to find a fullstack
        position with a company that aligns with my personal goal at a tangible level. I&apos;ve
        been drawn to TypeScript and React lately, this site being built with Next.js; however,
        I&apos;m familiar and confident with working on the backend implementing business logic.
      </p>
      <p></p>
      <p>
        Outside of my professional pursuits, my hobbies include reading, a passion nurtured during
        my five-year employment at a bookstore, as well as rock climbing and disc golf.
      </p>
    </div>
  );
}
