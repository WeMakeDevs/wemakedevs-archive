import React from "react";
import BannerImage from "../../../assets/home/events.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";

const Events = () => {
  return (
    <section>
      <div className={styles["events-container"]}>
        <img
          className={styles["banner"]}
          src={BannerImage}
          alt="Banner events"
        />
        <div className={styles["info-container"]}>
          <h2>
            Join our{" "}
            free and exciting{" "}
          events
          </h2>
          <p>
            <ul>
              <li>
                <span className={styles["highlight"]}>
                  All of our events are completely free and open for everyone.
                </span> {" "}
                Fun-filled events with no compromise on quality.
              </li>
              <li>
                Events conducted will help{" "}
                <span className={styles["highlight"]}>
                  develop various skills of students{" "}
                </span>
                in co-curricular activities and to expose them to the current
                trends in the technical and professional fields.
              </li>
              <li>
                Explore the plethora of events & have the opportunity to{" "}
                <span className={styles["highlight"]}>
                  grab amazing prizes & goodies!
                </span>
              </li>
            </ul>
          </p>
          <a
            href="https://github.com/wemakedevs/events"
            className={`link-primary`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore our events
            <img src={RightArrow} alt="right arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
