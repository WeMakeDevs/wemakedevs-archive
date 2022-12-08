import React from "react";
import styles from "./index.module.css";
import ChevronRight from "../../../assets/arrows/chevron-right.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import TopRightArrow from "../../../assets/arrows/top-right-mid-arrow.png";

const Header = () => {
  return (
    <section className={styles["header-container"]}>
      <div>
  
        <h1>
        Inspire, Educate, Empower
        </h1>
        <p className={styles["tag-line"]}>
          This is a community which provides{" "}
          <span className={styles["highlight"]}>free hands-on training</span> in
          various fields of computer science and have an inclusive community
          focusing on a{" "}
          <span className={styles["highlight"]}>learn by doing</span> approach.
        </p>
        <div className={styles["links"]}>
          <a
            href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
            className={`${styles["link"]} ${styles["link-primary"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Courses <img src={RightArrow} aria-hidden={true} alt=""></img>{" "}
          </a>
          <a
            href="https://www.youtube.com/@WeMakeDevs"
            className={`${styles["link"]} ${styles["link-secondary"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit YouTube{" "}
            <img src={TopRightArrow} aria-hidden={true} alt=""></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
