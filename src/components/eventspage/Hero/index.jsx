import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <header className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading'>
          Events that <br /> inspire{' '}
        </h1>
        <p className={styles.tagLine}>
          Want to give back to the{' '}
          <span className='highlight highlight--light'> community </span>,
          compete for awesome{' '}
          <span className='highlight highlight--light'> rewards </span> network,
          and gain knowledge? 🎁 <br />
          If so, you've come to the correct place. Participate in the numerous{' '}
          <span className='highlight highlight--light'>
            incredible events{' '}
          </span>{' '}
          hosted by the WeMakeDevs community. Check out the following events and
          participate.
        </p>
        <ArrowLink className={styles.cta} as={ButtonLink} href='#about'>
          About events
        </ArrowLink>
      </div>
    </header>
  );
};
export default Hero;
