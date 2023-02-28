import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <header className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading'>
          <span className='highlight highlight--light'>Boost your career</span>{' '}
          with our free courses!
        </h1>
        <p className='h3'>
          We believe that every student, irrespective of their college or
          branch, can make it big.
        </p>
        <br />
        <ArrowLink className={styles.cta} as={ButtonLink} href='#about'>
          About courses
        </ArrowLink>
      </div>
    </header>
  );
};
export default Hero;
