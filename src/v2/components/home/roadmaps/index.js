import React from "react";
import BannerImage from "../../../assets/home/courses.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";
import RightSingleArrow from "../../../assets/arrows/right-single-arrow.png";

const Mentorship = () => {
  return (
    <section  className={styles["mentorship-container-main"]} id="roadmaps">
      <div className={styles["mentorship-container"]}>
      
        <div className={styles["info-container"]}>
          <h1>
          MENTORSHIP
          <hr className={styles["mentorship-border"]}></hr>
          </h1>
          <p>
            <ul>
              <li>
              <img src={RightSingleArrow} alt="single-arrow" />
              <p>
                <span className={styles["highlight"]}>
                  A comprehensive answer to all of your mentoring needs,
                </span>{" "}
                including educational materials, communities to join,
                opportunities, and much more.
                </p>
              </li>
              <li>
              <img src={RightSingleArrow} alt="single-arrow"/>
              <p>
                <span className={styles["highlight"]}>
                  Roadmaps to help you stay on track,
                </span>{" "}
                including those for open-source, full-stack, devrel, and more.
                </p>
              </li>
            </ul>
          </p>
          <div className={styles["courses-link"]}>
          <button>
          <a
             href="https://github.com/WeMakeDevs/roadmaps"
            className={styles["roadmap-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
           LEARN MORE
            <img src={RightArrow} alt="right arrow" />
          </a>
          </button>
          
          </div>
        
        </div>
        <img className={styles["banner"]} src={BannerImage} alt="Banner" />
      </div>
      
    </section>
  );
};

export default Mentorship;
