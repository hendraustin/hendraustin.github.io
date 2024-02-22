import styles from "./sections.module.css";

export default function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <h1>Book Werm</h1>
      <br />
      <p>
        Inventory management web app for bookstores, with the intent to integrate with POS systems
        eventually for an all-in-one native application. Work in progress.
      </p>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>AWS</li>
        <li>Google API</li>
      </ul>

      <h1>Restaurant Picker</h1>
      <br />
      <p>
        Portfolio site built to expand my knowledge of Next.js, and spending more time with frontend
        structure and styling.
      </p>
      <ul>
        <li>Next</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

      <h1>Restaurant Picker</h1>
      <br />
      <p>
        CLI for picking a random restaurant using a given city/state in conjunction with Yelp Fusion
        API.
      </p>
      <ul>
        <li>Python</li>
        <li>Yelp Fusion API</li>
        <li>Postman</li>
      </ul>
    </div>
  );
}
