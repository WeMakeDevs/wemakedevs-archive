import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
const About = ({ content }) => {
  return (
    <section id='about'>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading highlight highlight--light'>{content.name}</h1>
        <p className='h3'>{content.description}</p>

        <img src={content.poster} className={styles.video} />

        <div className={styles.btn}>
          <ArrowLink
            as={ButtonLink}
            className={styles.btn}
            href='#register'
            openNewTab
          >
            Register
          </ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default About;
