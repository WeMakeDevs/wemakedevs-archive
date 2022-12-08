import React from "react";
import BannerImage from "../../../assets/home/courses.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";
import RightSingleArrow from "../../../assets/arrows/right-single-arrow.png";


const Courses = () => {
  return (
    <section className={styles["courses-container-main"]}>
    <section id="Courses">
      <div className={styles["courses-container"]}>
        <div className={styles["info-container"]}>
          <h1>
            COURSES
            <hr className={styles["courses-border"]}></hr>
          </h1>
          <p>
            <ul>
              <li>
              <img src={RightSingleArrow} alt="single-arrow" />
              <p>
              All courses are FREE while never compromising on quality.
              </p>
              </li>
              <li>
              <img src={RightSingleArrow} alt="single-arrow" />
              <p>
                We cover every topic in detail with a hands-on approach and
                mentor you to stand out to get opportunities by breaking all the
                barriers.
                </p>
              </li>
              <li>
              <img src={RightSingleArrow} alt="single-arrow"/>
              <p>
                Explore a wide range of courses including Data Structures &
                Algorithms, Web Development, DevOps, Machine Learning, and more!
                </p>
              </li>
            </ul>
          </p>
          <h3> $0/month</h3>
          <div className={styles["courses-link"]}>
          <button>
          <a
            href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
            className={styles["link-primary"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Courses
            <img src={RightArrow} alt="right arrow" />
          </a>
          </button>
          
          </div>
          <div className={styles["courses-free"]}>
          </div>
        </div>
        <img className={styles["banner"]} src={BannerImage} alt="Banner" />
      </div>
    </section>
    </section>
  );
};

export default Courses;
