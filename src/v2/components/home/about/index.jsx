import React from 'react'
import styles from "./index.module.css";
import Discord from "../../../assets/home/Discord.png"
import Handson from "../../../assets/home/Handson.png"
import Diamond from "../../../assets/home/Diamond.png"
import Free from "../../../assets/home/free.png"

const about = () => {
  return (
    <section className={styles["about-containers"]}>
          <h1> Our Foundations </h1>
        <div className={styles["about-container"]}>
          <div className={styles["about-cont-1"]}>
             <p> Students & professionals learning 
                  modern technologies </p>
            <br />
            <p> Regardless of Technical & 
             Non-Technical Backgrounds </p>
             <br />
             <p> Irrespective of college, branch.
             We are here to help you out. </p>
          </div>
          <div className={styles["about-cont-2"]}>
            <div className={styles["about-cont-2-a"]}>
              <p> Hands-on-training 
              </p>
              <img className={styles["about-cont-2-img"]} src={Handson} alt="handson" />
            </div>
            <div className={styles["about-cont-2-b"]}>
              <p> FREE Mentorship </p>
              <img className={styles["about-cont-2-img"]} src={Free} alt="handson" />
            </div>
            <div className={styles["about-cont-2-c"]}>
              <p> Inclusive Community </p>
              <img className={styles["about-cont-2-img"]} src={Diamond} alt="handson" />
            </div>
          </div>
         <div className={styles["about-cont-3"]}>
           <p> Join our Discord Community Server </p>
           <div className={styles["about-discord"]}>
           <a
            href="https://github.com/wemakedevs/events"
            className={`link-primary`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ Discord } alt="discord" /> Discord
            
          </a>
          </div>
         
    </div>
       </div>
    </section>
   )
}

export default about