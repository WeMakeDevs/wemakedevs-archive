import React from 'react'
import styles from "./index.module.css";
import Coursess from "../Course/Course"
const Courses = () => {
  return (
    <section className={styles["course-containerr"]}>
    <h1>
    Courses 
    </h1>
    <h2>
    Boost your career with our Complete Hands On Courses.
    </h2>
    <div className={styles["course-container"]}>
      <div className={styles["course-cont-1"]}>
         <p> All courses are FREE while never compromising on quality. </p>
      </div>
      <div className={styles["course-cont-3"]}>
        <p> We cover every topic in detail with a hands-on approach and mentor you to stand out to get opportunities by breaking all the barriers </p>
      </div>
     <div className={styles["course-cont-3"]}>
      <p> Explore a wide range of courses including Data Structures & Algorithms, Web Development, DevOps, Machine Learning, and more! </p>
     </div>
   </div>
   <Coursess />
</section>
  )
}

export default Courses