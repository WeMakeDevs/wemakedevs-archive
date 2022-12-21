import React from "react";
import AboutImage from "../../../assets/home/aboutus.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";

const About = () => {
  return (
    <section>
      <div className={styles["about-container"]}>
        <img className={styles["banner"]} src={AboutImage} alt="About us" />
        <div className={styles["info-container"]}>
          <h2>About us</h2>
          <p>
            <ul>
              <li>
                We believe that every student, irrespective of their college or
                branch, can make it big.{" "}
                <span className={styles["highlight"]}>
                  {" "}
                  Community Classroom is an initiative built on this thought.{" "}
                </span>
              </li>
              <li>
                We provide{" "}
                <span className={styles["highlight"]}>
                  hands-on training, mentorship for FREE
                </span>{" "}
                and have an
                <span className={styles["highlight"]}>
                  inclusive community.
                </span>
              </li>
              <li>
                Get{" "}
                <span className={styles["highlight"]}>
                  expert guidance with career
                </span>
                , Open Source, and internships, jobs around the world.
              </li>
            </ul>
          </p>
          <a
            href="https://discord.gg/wemakedevs"
            className={styles["link-primary"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
            <img src={RightArrow} alt="right arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
