import React from "react";
import BannerImage from "../../../assets/home/courses.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";

const Courses = () => {
  return (
    <section>
      <div className={styles["courses-container"]}>
        <div className={styles["info-container"]}>
          <h2>
            Boost your career with our{" "}
            Complete Hands On Courses
          </h2>
          <p>
            <ul>
              <li>All courses are FREE while never compromising on quality.</li>
              <li>
                We cover every topic in detail with a hands-on approach and
                mentor you to stand out to get opportunities by breaking all the
                barriers.
              </li>
              <li>
                Explore a wide range of courses including Data Structures &
                Algorithms, Web Development, DevOps, Machine Learning, and more!
              </li>
            </ul>
          </p>
          <a
            href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
            className={styles["link-primary"]}
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

export default Courses;
