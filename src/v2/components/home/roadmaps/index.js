import React from "react";
import BannerImage from "../../../assets/home/courses.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import Icon from "../../../assets/home/Icon.png";
import styles from "./index.module.css";

const Mentorship = () => {
  return (
    <section>
      <div className={styles["mentorship-container"]}>
        <div className={styles["mentorship-info-container"]}>
          <h2>
          Stay on track with the help of our roadmaps.
          </h2>
          <p>
            <ul>
           
            <li>
            <img className= {styles["mentorship-img"]}src={Icon} alt= "icon" />
            Made by people best in the industry
            </li>
           <li>
           <img className= {styles["mentorship-img"]} src={Icon} alt= "icon" />
           Tried and tested roadmaps.
           </li>
           <li>
           <img className= {styles["mentorship-img"]} src={Icon} alt= "icon" /> 
           Always kept up to date for best result.
           </li>
            </ul>
          </p>
          <a
            href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
            className={`link-primary`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Roadmaps
            <img src={RightArrow} alt="right arrow" />
          </a>
        </div>
        <img className={styles["banner"]} src={BannerImage} alt="Banner" />
      </div>
    </section>
  );
};

export default Mentorship;
