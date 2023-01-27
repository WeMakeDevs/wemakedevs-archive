import clsx from 'clsx';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';

import styles from './index.module.css';
const Stats = () => {
  return (
    <div className={clsx(styles.section)}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Stats about prizes</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.statsContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <div className={styles.number}>$20,000+</div>
            <div className={styles.title}>Prizes</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaMagic />
            </div>
            <div className={styles.number}>70+</div>
            <div className={styles.title}>Countries+</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
            <div className={styles.number}>100+</div>
            <div className={styles.title}>Winners</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <div className={styles.number}>10+</div>
            <div className={styles.title}>Events</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
