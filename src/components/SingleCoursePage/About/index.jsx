import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
const About = ({ content }) => {
  return (
    <section id='about'>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading'>
          <span className='highlight highlight--light'>
            {content.title.highlight}
          </span>{' '}
          {content.title.normal}
        </h1>
        <p className='h3'>{content.subtitle}</p>

        <iframe
          src={content.videoLink}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          className={styles.video}
        ></iframe>

        <div className={styles.btn}>
          {content.buttons.map((btn) => (
            <ArrowLink
              as={ButtonLink}
              className={styles.btn}
              href={btn.href}
              openNewTab
              key={btn.name}
            >
              {btn.name}
            </ArrowLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
