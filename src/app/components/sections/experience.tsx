import styles from "./sections.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../../data";
export default function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      {data.experience.map((company) => (
        <div className={styles.experience_item}>
          <h1>{company.name}</h1>
          <h2>{company.date}</h2>
          <p>{company.description}</p>
          <ul>
            {company.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.resume_item}>
        <a href="../static/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Full Resume <FaExternalLinkAlt style={{ fontSize: ".875rem" }} />
        </a>
      </div>
    </div>
  );
}
