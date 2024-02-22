import styles from "./sections.module.css";

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <p>
        Hi there, I'm Austin. My objective is to leverage my technical skills in a role that
        contributes to the improvement of society. I am driven by the idea of encountering
        opportunities where I can make a positive impact and actively engage in projects that serve
        the greater good.
      </p>
      <p>
        My current goal is to find a fullstack position with a company that aligns with my personal
        mission statement at a tangible level. I've been drawn to TypeScript and React.js lately,
        with this site being built with Next.js, however, I am not averse to diving into backend
        business logic.
      </p>
      <p>
        Outside of my professional pursuits, my hobbies include reading, a passion nurtured during
        my five-year employment at a bookstore, as well as rock climbing and disc golf.
      </p>
    </div>
  );
}
