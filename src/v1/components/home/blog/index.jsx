import React from "react";
import BannerImage from "../../../assets/home/blog.png";
import RightArrow from "../../../assets/arrows/right-arrow.png";
import styles from "./index.module.css";

const Blog = () => {
  return (
    <section>
      <div className={styles["blog-container"]}>
        <div className={styles["info-container"]}>
          <h2>
            Read and write Blogs  to
            win amazing prizes
          </h2>
          <p>
            <ul>
              <li>
                Participate in monthly blog events and win exciting swags and
                prizes.
              </li>
              <li>
                Read the blogs written or curated specially by the Community
                Classroom team.
              </li>
              <li>
                These blogs are written with the present in mind, all of these
                blogs are up to date.
              </li>
            </ul>
          </p>
          <a
            href="http://blog.wemakedevs.org"
            className={`link-primary`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Blogs
            <img src={RightArrow} alt="right arrow" />
          </a>
        </div>
        <img className={styles["banner"]} src={BannerImage} alt="Banner" />
      </div>
    </section>
  );
};

export default Blog;
