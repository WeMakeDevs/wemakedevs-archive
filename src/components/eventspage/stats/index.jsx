import clsx from 'clsx';
import { BsFillTrophyFill } from 'react-icons/bs';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { VscSymbolEvent } from 'react-icons/vsc';

import styles from './index.module.css';
const Stats = () => {
  return (
    <div className={clsx(styles.section)}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Our stats</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.statsContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <MdOutlineAttachMoney />
            </div>
            <div className={styles.number}>$20,000+</div>
            <div className={styles.title}>Prizes</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaFontAwesomeFlag />
            </div>
            <div className={styles.number}>70+</div>
            <div className={styles.title}>Countries+</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <BsFillTrophyFill />
            </div>
            <div className={styles.number}>100+</div>
            <div className={styles.title}>Winners</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <VscSymbolEvent />
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
