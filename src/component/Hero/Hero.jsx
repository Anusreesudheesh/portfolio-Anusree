import React from 'react'
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title2}>Hi,I'm Anusree</h2>
            <p className={styles.description}>I'm a MERN Stack Developer,Reach out if you'd like to learn more!</p>
            <a href="mailto:anusreee2912@gmail.com" className={styles.contact}>Contact</a>
        </div>
        <img className={styles.heroimg} src="new photo.png" alt="image" />
        <div className={styles.topblur}></div>
    </section>
  )
}

export default Hero
