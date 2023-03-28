import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <section className={styles['header-container']}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading'>Inspire. Educate. Empower</h1>
        <p className={styles.tagLine}>
          This is a community which provides{' '}
          <span className='highlight highlight--yellow'>
            free hands-on training
          </span>{' '}
          in various fields of computer science and have an inclusive community
          focusing on a{' '}
          <span className='highlight highlight--yellow'>learn by doing</span>{' '}
          approach.
        </p>
        <div className={styles.links}>
          <ArrowLink as={ButtonLink} href='#courses'>
            Courses
          </ArrowLink>
          <ArrowLink as={ButtonLink} href='#mentorship'>
            Mentorship
          </ArrowLink>
          <ArrowLink as={ButtonLink} href='#events'>
            Events
          </ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
