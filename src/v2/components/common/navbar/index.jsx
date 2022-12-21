import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/common/logo.svg";
import MenuIcon from "../../../assets/navbar/menu.png";
import { navLinks } from "./data";
import styles from "./index.module.css";

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
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
          <li></li>
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
