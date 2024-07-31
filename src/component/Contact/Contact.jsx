import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Get in touch!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="emailIcon.png" alt="email icon" />
          <a href="anusreee2912@gmail.com">anusreee2912@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="linkedinIcon.png" alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/anusree-sudheesh/">
            /anusree-sudheesh
          </a>
        </li>
        <li className={styles.link}>
          <img src="githubIcon.png" alt="github icon" />
          <a href="https://github.com/Anusreesudheesh">@Anusreesudheesh</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
