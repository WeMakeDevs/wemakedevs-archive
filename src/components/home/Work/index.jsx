import clsx from 'clsx';

import styles from './index.module.css';

import Adobe from '../../../assets/home/adobe.svg';
import Amazon from '../../../assets/home/amazon.svg';
import Google from '../../../assets/home/google.svg';
import Microsoft from '../../../assets/home/microsoft.svg';

const index = () => {
  return (
    <div className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>OUR STUDENTS WORK AT</h2>
        <hr className={clsx('styled-hr', styles.headingWorkLine)} />
        <div className={styles.workImg}>
          <img className={styles.workGoogle} src={Google} alt='google' />
          <img className={styles.workAmazon} src={Amazon} alt='amazon' />
          <img className={styles.workMicro} src={Microsoft} alt='microsoft' />
          <img className={styles.workAdobe} src={Adobe} alt='adobe' />
        </div>
      </div>
    </div>
  );
};

export default index;
