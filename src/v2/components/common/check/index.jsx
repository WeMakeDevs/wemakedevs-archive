import React from 'react'
import styles from "./index.module.css";

const index = () => {
  return (
    <section>
    <div className={styles["check-container"]}> 
    <p> Check out our <span className={styles["check-container-event"]}> upcoming events </span>
        and <span className={styles["check-container-event"]}>
        win exciting prizes! 
        </span>
    </p>
    <div className={styles["events-button"]}>
          <a
            href="https://blog.wemakedevs.org/"
            className={styles["events-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
       CLICK ME
            
          </a>
          </div>
    
    </div>
    </section>
  )
}

export default index