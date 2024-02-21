import styles from "./sections.module.css";

export default function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <h1>Generac Power Systems</h1>
      <h2>2022 - 2023</h2>
      <br />
      <h1>Software Engineer</h1>
      <p>
        Developed across the full stack for the Clean Energy team, implementing business logic for
        RESTful API endpoints, built an algorithm for a customer site to poll solar power data
        analytics, and introduced debug capabilities within a React Native application. Maintained
        code coverage with both unit and integration testing to meet quality standards.
      </p>
      <ul>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>TypeScript</li>
        <li>React Native</li>
        <li>Python</li>
        <li>AWS</li>
        <li>CircleCI</li>
        <li>Docker</li>
      </ul>

      <h1>Generac Power Systems</h1>
      <h2>2020 - 2022</h2>
      <br />
      <h1>Software Engineer Intern</h1>
      <p>
        Worked on various projects in varying languages while earning Bachelor's degree, such as
        requirements gathering and building MVP Flutter mobile application for a client, meeting
        weekly to discuss current progress. Also, implemented a regression test suite for
        client-facing site, incorporating 200+ tests into a CI/CD workflow to ensure code integrity
        during merges.
      </p>
      <ul>
        <li>Python</li>
        <li>Selenium</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>CircleCI</li>
        <li>IoT Devices</li>
        <li>Flutter</li>
      </ul>

      <a href="../static/resume.pdf" target="_blank" rel="noopener noreferrer">
        View Full Resume
      </a>
    </div>
  );
}
