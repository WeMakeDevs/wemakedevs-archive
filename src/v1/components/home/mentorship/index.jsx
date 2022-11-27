import React from "react";
import BannerImage from "../../../assets/home/courses.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";

const Mentorship = () => {
  return (
    <section>
      <div className={styles["mentorship-container"]}>
        <div className={styles["info-container"]}>
          <h2>
            <div className="animated-gradient">Roadmaps & Mentorship </div>
            made by best in the industry
          </h2>
          <p>
            <ul>
              <li>
                <span className={styles["highlight"]}>
                  A comprehensive answer to all of your mentoring needs,
                </span>{" "}
                including educational materials, communities to join,
                opportunities, and much more.
              </li>
              <li>
                <span className={styles["highlight"]}>
                  Roadmaps to help you stay on track,
                </span>{" "}
                including those for open-source, full-stack, devrel, and more.
              </li>
            </ul>
          </p>
          <a
            href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
            className={`link-primary`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Courses
            <img src={RightArrow} alt="right arrow" />
          </a>
        </div>
        <img className={styles["banner"]} src={BannerImage} alt="Banner" />
      </div>
    </section>
  );
};

export default Mentorship;
