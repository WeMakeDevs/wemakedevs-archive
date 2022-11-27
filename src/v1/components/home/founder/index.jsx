import React from "react";
import BannerImage from "../../../assets/home/founder.png";
import Twitter from "../../../assets/home/twitter.png";
import Linkedin from "../../../assets/home/linkedin.png";
import Instagram from "../../../assets/home/instagram.png";
import styles from "./index.module.css";

const Founder = () => {
  return (
    <section>
      <div className={styles["founder-container"]}>
        <div className={styles["banner-container"]}>
          <img
            className={styles["banner"]}
            src={BannerImage}
            alt="Banner events"
          />
          <div className={styles["purple-bg"]}></div>
          <div className={styles["yellow-bg"]}></div>
        </div>
        <div className={styles["info-container"]}>
          <h2>
            <span className={`animated-gradient`}>Founder:</span> Kunal Kushwaha
          </h2>
          <p>
            Kunal is a developer from India. He is working towards empowering
            communities via Open Source and Education. He is currently doing
            <span className={styles["highlight"]}>
              {" "}
              Developer Advocacy at Civo, community management at Major League
              Hacking,
            </span>{" "}
            is a{" "}
            <span className={styles["highlight"]}>
              CNCF Ambassador, GitHub Campus Expert, Gold Microsoft Learn
              Student Ambassador, Google Summer of Code Mentor
            </span>{" "}
            at Red Hat Middleware.
          </p>
          <div
            className={styles["social-pills"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <a
              href="https://twitter.com/kunalstwt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles["pill"]} ${styles["pill-twitter"]}`}>
                <img src={Twitter} alt="Twitter" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/kunalsig/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles["pill"]} ${styles["pill-instagram"]}`}>
                <img src={Instagram} alt="Instagram" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-kushwaha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles["pill"]} ${styles["pill-linkedin"]}`}>
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
