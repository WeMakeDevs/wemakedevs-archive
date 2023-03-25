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
        {content.videoUrl ? (
          <iframe
            src={content.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            className={styles.video}
          ></iframe>
        ) : (
          <img src={content.poster} className={styles.video} />
        )}
        <div className={styles.btn}>
          <ArrowLink
            as={ButtonLink}
            className={styles.btn}
            href={
              new Date().getTime() < new Date(content.time).getTime()
                ? '#register'
                : content.videoUrl
            }
            openNewTab
          >
            {new Date().getTime() < new Date(content.time).getTime()
              ? 'Register'
              : 'Watch recap'}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default About;
