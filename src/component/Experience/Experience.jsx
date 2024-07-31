import React from "react";
import styles from "./experience.module.css";
import skills from "../../data/skill.json";
import history from "../../data/history.json";
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillimagecontainer}>
                  <img
                    className={styles.skillimg}
                    src={skill.imageSrc}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((history, id) => {
            return (
              <li key={id} className={styles.historyitem}>
                <div className={styles.historyitemdetails}>
                  <h3>{`${history.role}|${history.organization}`}</h3>
                  <p>{history.place}</p>
                  <p>{history.startdate}</p>
                  <ol className={styles.experiencelist}>
                    {history.experiences.map((item, id) => {
                      return <li key={id}>{item}</li>;
                    })}
                  </ol>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
