import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../../../assets/common/logo.svg";
import YoutubeBg from "../../../assets/navbar/youtube-bg.png";
import YoutubePlay from "../../../assets/navbar/youtube-play.png";
import MenuIcon from "../../../assets/navbar/menu.png";
import styles from "./index.module.css";
import { navLinks } from "./data";
import { useState } from "react";

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div className={styles["nav-container"]}>
      <img className={styles["nav-logo"]} src={Logo} alt="We make devs logo" />
      <nav
        className={
          navExpanded
            ? `${styles["nav-links"]} ${styles["nav-links-expanded"]}`
            : styles["nav-links"]
        }
      >
        <ul>
          {navLinks.map((link) => {
            if (link.active) {
              return (
                <li className={styles["nav-active"]}>
                  <a href={link.href} rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              );
            }
            return (
              <li>
                <a href={link.href} >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
          
          </li>
        </ul>
      </nav>
     
      <img
        className={styles["nav-menu"]}
        src={MenuIcon}
        alt="Menu icon"
        onClick={() => setNavExpanded((prev) => !prev)}
      />
    </div>
  );
};

export default Navbar;