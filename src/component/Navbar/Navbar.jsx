import React from "react";
import styles from "./navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menubtn}
          src={menuopen ? "closeIcon.png" : "menuIcon.png"}
          alt="menu-button"
          onClick={()=>setMenuOpen(!menuopen)}
        />
        <ul className={`${styles.menuitems}  ${menuopen && styles.menuopen}` } onClick={()=>setMenuOpen(false)}>
            
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
