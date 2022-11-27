import React from "react";
import BannerImage from "../../../assets/home/podcast.png";
import TopRightArrow from "../../../assets/arrows/top-right-mid-black-arrow.png";
import styles from "./index.module.css";

const Podcast = () => {
  return (
    <section>
      <div className={styles["podcast-container"]}>
        <div className={styles["info-container"]}>
          <p className={styles["category"]}>Podcast</p>
          <h2>Open Source Cafe Podcast</h2>
          <p className={styles["info"]}>
            The Open Source Cafe, Out of Syllabus, KlassTime with Karuna, AMA
            session on Discord is an initiative to highlight the stories,
            journeys, tips & tricks of some of the amazing community leaders and
            members. Learn from their experiences and get mentored on your
            journey by folks from around the world.
          </p>
          <a
            href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr"
            className={styles["link-secondary"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch now
          </a>
        </div>
        <div className={styles["banner-container"]}>
          <img className={styles["banner"]} src={BannerImage} alt="Banner" />
          <a
            href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr"
            className={styles["link-primary"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            See all episodes
            <img src={TopRightArrow} alt="right arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
