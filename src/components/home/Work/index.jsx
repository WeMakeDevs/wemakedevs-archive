import clsx from 'clsx';

import styles from './index.module.css';

import Adobe from '@/assets/home/company/adobe.svg';
import Amazon from '@/assets/home/company/amazon.svg';
import Cisco from '@/assets/home/company/cisco.svg';
import Clicklabs from '@/assets/home/company/clicklabs.svg';
import Google from '@/assets/home/company/google.svg';
import Microsoft from '@/assets/home/company/microsoft.svg';
import Razorpay from '@/assets/home/company/razorpay.svg';
import Samsung from '@/assets/home/company/samsung.svg';
import towerResearch from '@/assets/home/company/towerResearch.svg';
import Virtusa from '@/assets/home/company/virtusa.svg';

const index = () => {
  return (
    <div>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Our students work at</h2>
        <hr className={clsx('styled-hr', styles.headingWorkLine)} />
        <div className={styles.workImg}>
          <img src={Google} alt='google' />
          <img src={Amazon} alt='amazon' />
          <img src={Microsoft} alt='microsoft' />
          <img src={Adobe} alt='adobe' />
          <img src={Samsung} alt='samsung' />
          <img src={Virtusa} alt='virtusa' />
          <img src={Cisco} alt='Cisco' />
          <img src={Razorpay} alt='Razorpay' />
          <img src={Clicklabs} alt='Clicklabs' />
          <img src={towerResearch} alt='Tower Research' />
        </div>
      </div>
    </div>
  );
};

export default index;
