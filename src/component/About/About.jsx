import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutitems}>
          <li className={styles.aboutitem}>
            <img src="cursorIcon.png" alt="" />
            <div className={styles.aboutitemtext}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a React frontend developer,with a keen eye for user
                experience and a commitment to crafting elegant, efficient, and
                responsive web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutitem}>
            <img src="serverIcon.png" alt="" />
            <div className={styles.aboutitemtext}>
            <h3>Backend Developer</h3>
            <p>
              Backend developer skilled in Express, Node.js, and MongoDB. I
              create robust, scalable APIs and databases to power dynamic web
              applications
            </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
