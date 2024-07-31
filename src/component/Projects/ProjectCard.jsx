import React from "react";
import styles from "./projectcard.module.css";

const ProjectCard = ({
  project: { title, description, demo, source, skills },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
