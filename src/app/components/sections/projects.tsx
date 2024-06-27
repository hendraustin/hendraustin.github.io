"use client";
import styles from "./sections.module.css";
import { data } from "../../data";

export default function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      {data.projects.map((project) => (
        <div
          key={project.id}
          className={styles.project_item}
          onClick={() => {
            window.location.href = project.link;
          }}
        >
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <ul>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
