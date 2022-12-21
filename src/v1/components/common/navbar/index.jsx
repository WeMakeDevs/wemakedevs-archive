import React from "react";
import Logo from "../../../assets/common/logo.svg";
import YoutubeBg from "../../../assets/navbar/youtube-bg.png";
import YoutubePlay from "../../../assets/navbar/youtube-play.png";
import MenuIcon from "../../../assets/navbar/menu.png";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
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
                  {link?.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href}>{link.name}</Link>
                  )}
                </li>
              );
            }
            return (
              <li>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <div
              className={`${styles["nav-youtube"]} ${styles["nav-youtube-sm"]}`}
            >
              <a
                href="https://www.youtube.com/c/KunalKushwaha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
              <div className={styles["youtube-icon"]}>
                <img
                  className={styles["youtube-bg"]}
                  src={YoutubeBg}
                  alt="Youtube icon bg"
                  aria-hidden={true}
                />
                <img
                  className={styles["youtube-play"]}
                  src={YoutubePlay}
                  alt="Youtube icon play"
                  aria-hidden={true}
                />
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles["nav-youtube"]}>
        <a
          href="https://www.youtube.com/c/KunalKushwaha"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <div className={styles["youtube-icon"]}>
          <img
            className={styles["youtube-bg"]}
            src={YoutubeBg}
            alt="Youtube icon bg"
            aria-hidden={true}
          />
          <img
            className={styles["youtube-play"]}
            src={YoutubePlay}
            alt="Youtube icon play"
            aria-hidden={true}
          />
        </div>
      </div>
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
