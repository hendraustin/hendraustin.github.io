import styles from "./sections.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <div className={styles.experience_item}>
        <h1>Phomo</h1>
        <h2>2024 - Present</h2>
        <br />
        <h1>Software Engineer</h1>
        <p>
          Implementing a React Native application to automate a photogrammetry process for
          generating 3D models as an initial MVP to share with stakeholders. Currently utilizing AWS
          Amplify to quickly standup authentication and storage through Cognito and S3. Lastly,
          building and deploying the application for internal testing through Expo with Expo
          Application Services.
        </p>
        <ul>
          <li>TypeScript</li>
          <li>React Native</li>
          <li>AWS</li>
          <li>Expo</li>
        </ul>
      </div>

      <div className={styles.experience_item}>
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
      </div>

      <div className={styles.experience_item}>
        <h1>Generac Power Systems</h1>
        <h2>2020 - 2022</h2>
        <br />
        <h1>Software Engineer Intern</h1>
        <p>
          Worked on various projects in varying languages while earning Bachelor&apos;s degree, such
          as requirements gathering and building MVP Flutter mobile application for a client,
          meeting weekly to discuss current progress. Also, implemented a regression test suite for
          client-facing site, incorporating 200+ tests into a CI/CD workflow to ensure code
          integrity during merges.
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
      </div>

      <div className={styles.resume_item}>
        <a href="../static/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Full Resume <FaExternalLinkAlt style={{ fontSize: ".875rem" }} />
        </a>
      </div>
    </div>
  );
}
