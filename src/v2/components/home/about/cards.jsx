import React from 'react'
import styles from './index.module.css'
import RightArrow from '../../../assets/arrows/right-arrow.png'

const cards = () => {
  return (
    <section className={styles["about-cards"]}>
    <div className={styles["main-about"]}>
       <div className={styles["about-card-1"]}>
            <h1> Education </h1>
            <span><hr className={styles["about-card-border"]}></hr></span>
            <p> We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.</p>
            <div className={styles["about-link"]}>
          <button>
          <a
            href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
            className={styles["link-primary-2"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Courses
            <img src={RightArrow} alt="right arrow" />
          </a>
          </button>
          
          </div>
       </div>
       <div className={styles["about-card-2"]}>
            <h1> Events </h1>
            <span><hr className={styles["about-card-border"]}></hr></span>
            <p> We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.</p>
            <div className={styles["about-link"]}>
          <button>
          <a
            href="https://github.com/WeMakeDevs/events"
            className={styles["link-primary-2"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore our Events
            <img src={RightArrow} alt="right arrow" />
          </a>
          </button>
          
          </div>
       </div>
       <div className={styles["about-card-3"]}>
           <h1> Mentorship </h1>
           <span><hr className={styles["about-card-border"]}></hr></span>
           <p> We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.</p>
           <div className={styles["about-link"]}>
          <button>
          <a
            href="https://github.com/WeMakeDevs/roadmaps"
            className={styles["link-primary-2"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore our Roadmaps
            <img src={RightArrow} alt="right arrow" />
          </a>
          </button>
          
          </div>
       </div>
    </div>
    </section>
  )
}

export default cards