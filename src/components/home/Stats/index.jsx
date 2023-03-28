import clsx from 'clsx';
import { useState } from 'react';
import CountUp from 'react-countup';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';
import ScrollTrigger from 'react-scroll-trigger';

import styles from './index.module.css';

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className={clsx(styles.section)}>
        <div className={clsx('layout', styles.layout)}>
          <h2 className='h1'>Numbers say it all</h2>
          <hr className={clsx('styled-hr', styles.headingLine)} />
          <div className={styles.statsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaUsers />
              </div>
              <div className={styles.number}>
                {counterOn && (
                  <CountUp start={0} end={56000} duration={2} delay={0} />
                )}
                +
              </div>
              <div className={styles.title}>Members</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaMagic />
              </div>
              <div className={styles.number}>
                {counterOn && (
                  <CountUp start={0} end={20000} duration={2} delay={0} />
                )}
                +
              </div>
              <div className={styles.title}>Positive Reviews</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaYoutube />
              </div>
              <div className={styles.number}>
                {counterOn && (
                  <CountUp start={0} end={350000} duration={2} delay={0} />
                )}
                +
              </div>
              <div className={styles.title}>Youtube</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaGraduationCap />
              </div>
              <div className={styles.number}>
                {counterOn && (
                  <CountUp start={0} end={500} duration={2} delay={0} />
                )}
                +
              </div>
              <div className={styles.title}>Colleges</div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
