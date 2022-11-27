import React from "react";
import styles from "./index.module.css";
import ChevronRight from "../../../assets/arrows/chevron-right.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import TopRightArrow from "../../../assets/arrows/top-right-mid-arrow.png";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <div>
        <a
          href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr"
          className={styles["podcast-pill"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out our most recent podcast{" "}
          <img src={ChevronRight} aria-hidden={true} alt=""></img>
        </a>
        <h1>
          The <span className={styles["highlight"]}>Free</span> Community for
          Modern Learning.
        </h1>
        <p className={styles["tag-line"]}>
          This is a community which provides{" "}
          <span className={styles["highlight"]}>free hands-on training</span> in
          various fields of computer science and have an inclusive community
          focusing on a{" "}
          <span className={styles["highlight"]}>learn by doing</span> approach.
        </p>
        <div className={styles["links"]}>
          <a href="/" className={`${styles["link"]} ${styles["link-primary"]}`}>
            See courses <img src={RightArrow} aria-hidden={true} alt=""></img>{" "}
          </a>
          <a
            href="/"
            className={`${styles["link"]} ${styles["link-secondary"]}`}
          >
            Visit youtube{" "}
            <img src={TopRightArrow} aria-hidden={true} alt=""></img>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
