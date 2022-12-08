import React from "react";
import BannerImage from "../../../assets/home/events.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import RightSingleArrow from "../../../assets/arrows/right-single-arrow.png";
import styles from "./index.module.css";

const Events = () => {
  return (
    <section className={styles["events-container-main"]}>
    <section id="events">
      <div className={styles["events-container"]}>
      <img
          className={styles["banner"]}
          src={BannerImage}
          alt="Banner events"
        />
        <div className={styles["info-container"]}>
          <h1>
          EVENTS
           <hr className={styles["events-border"]}></hr>
          </h1>
          <p>
            <ul>
              <li>
              <img src={RightSingleArrow} alt="single-arrow" />
              <p>
                <span className={styles["highlight"]}>
                  All of our events are completely free and open for everyone.
                </span> {" "}
                Fun-filled events with no compromise on quality.
                </p>
              </li>
              <li>
              <img src={RightSingleArrow}  alt="single-arrow"/>
              <p>
                Events conducted will help{" "}
                <span className={styles["highlight"]}>
                  develop various skills of students{" "}
                </span>
                in co-curricular activities and to expose them to the current
                trends in the technical and professional fields.
                </p>
              </li>
              <li>
              <img src={RightSingleArrow} alt="single-arrow" />
              <p>
                Explore the plethora of events & have the opportunity to{" "}
                <span className={styles["highlight"]}>
                  grab amazing prizes & goodies!
                </span>
                </p>
              </li>
            </ul>
          </p>
          <div className={styles["events-free"]}>
          </div>
          <div className={styles["events-button"]}>
          <a
            href="https://blog.wemakedevs.org/"
            className={styles["events-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
          Blogging Challenges
            <img src={RightArrow} alt="right arrow" />
          </a>
          <a
            href="https://devpost.com/hackathons?search=wemakedevs"
            className={styles["events-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackathons
            <img src={RightArrow} alt="right arrow" />
          </a>
          <a
            href="https://github.com/wemakedevs/events"
            className={styles["events-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetups
            <img src={RightArrow} alt="right arrow" />
          </a>
          </div>
        </div>
       
      </div>
    </section>
    </section>
  );
};

export default Events;
