import clsx from 'clsx';
import { BsCalendar, BsClock } from 'react-icons/bs';

import styles from './index.module.css';

import { webinar } from '@/content/Webinars/index.content';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Upcoming = () => {
  return (
    <section id='upcoming'>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Upcoming Webinar</h2>
        <hr className={clsx('styled-hr', styles.hr)} />

        <div className={styles.cardsContainer}>
          {webinar.some(
            (web) => new Date().getTime() < new Date(web.time).getTime()
          ) ? (
            webinar.map((web) => {
              if (new Date().getTime() < new Date(web.time).getTime())
                return <Card {...web} key={web.image} />;
            })
          ) : (
            <p>There no upcoming events right now</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default Upcoming;

export const Card = ({ img, title, time, description }) => {
  return (
    <div className={styles.card}>
      <section>
        <img src={img} alt={title + 'banner'} />
        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p
            style={{
              marginTop: '1rem',
            }}
          >
            <span>
              <BsCalendar />{' '}
            </span>{' '}
            <b> {new Date(time).toLocaleDateString()}</b>
          </p>
          <p>
            <span>
              <BsClock />{' '}
            </span>{' '}
            <b> {new Date(time).toLocaleTimeString()}</b>
          </p>
          <ArrowLink
            as={ButtonLink}
            className={styles.btn1}
            href={`/webinar/${title.split(' ').join('').toLowerCase()}`}
            openNewTab
          >
            Know more
          </ArrowLink>
        </div>
      </section>
    </div>
  );
};
