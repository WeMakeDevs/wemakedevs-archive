import React from "react";
import RightArrow from '../../../assets/arrows/right-arrow.png'
import styles from './index.module.css'

export default function Card(props) {
    return (
    <div className={styles["main-about"]}>
       <div className={styles["about-card-1"]}>
            <h1> {props.title}</h1>
            <span><hr className={styles["about-card-border"]}></hr></span>
            <p> {props.description}</p>
            <div className={styles["about-link"]}>
                <button>
                <a href={props.link} className={styles["link-primary"]} target="_blank" rel="noopener noreferrer"> {props.buttonText} <img src={RightArrow} alt="right arrow" /> </a>
                </button>
            </div> 
        </div>
    </div>
    )
}