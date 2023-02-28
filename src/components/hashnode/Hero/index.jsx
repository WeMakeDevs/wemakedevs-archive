import clsx from 'clsx';
import { SiHashnode } from 'react-icons/si';

import styles from './index.module.css';

const Hero = () => {
  return (
    <header className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading'>
          <span className='highlight highlight--yellow'>WeMakeDevs </span>{' '}
          Blogging Challenge
        </h1>
        <p className={clsx('h2', styles.hashnode)}>
          Powered by <SiHashnode className={styles.icon} /> hashnode{' '}
        </p>
        <hr className={clsx('styled-hr', styles.hr)} />
        <p className='h3'>
          Get a chance to win exciting prizes such as{' '}
          <strong>MacBooks, iPhones, iPads and more every month 🤩 </strong>
        </p>
        <br />
        <p className='h3'>
          <span className='highlight highlight--yellow'>Blogging</span> is about
          being yourself and putting what you have into it.
        </p>
      </div>
    </header>
  );
};
export default Hero;
