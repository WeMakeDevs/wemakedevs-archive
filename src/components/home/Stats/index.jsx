import React ,{ useState } from 'react';
import clsx from 'clsx';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';
import styles from './index.module.css';

// for animate countup stats -

import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger"


const Stats = () => {

  const [Countup,setcountup] = useState(false)

  return (
    <div className={clsx(styles.section)}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Numbers say it all</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.statsContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <ScrollTrigger onEnter={()=>{setcountup(true)}} onExit={()=>{setcountup(false)}}>
            <div className={styles.number}>
              {/* 56,000+ */}
              {Countup && <CountUp start={0} end={56000} duration={1.5} delay={0} /> }
               +
            </div>
            </ScrollTrigger>
            <div className={styles.title}>Members</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaMagic />
            </div>
            <ScrollTrigger onEnter={()=>{setcountup(true)}} onExit={()=>{setcountup(false)}}>
            <div className={styles.number}>
              {/* 20,000+ */}
              {Countup && <CountUp start={0} end={20000} duration={1.5} delay={0} /> } +
            </div>
            </ScrollTrigger>
            <div className={styles.title}>Positive Reviews</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
            <ScrollTrigger onEnter={()=>{setcountup(true)}} onExit={()=>{setcountup(false)}}>
            <div className={styles.number}>
              {/* 350000+ */}
              {Countup && <CountUp start={0} end={350000} duration={1.5} delay={0} /> } +
            </div>
            </ScrollTrigger>
            <div className={styles.title}>Youtube</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <ScrollTrigger onEnter={()=>{setcountup(true)}} onExit={()=>{setcountup(false)}}>
            <div className={styles.number}>
              {/* 500 + */}
              {Countup && <CountUp start={0} end={500} duration={1.5} delay={0} /> } +
            </div>
            </ScrollTrigger>
            <div className={styles.title}>Colleges</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;