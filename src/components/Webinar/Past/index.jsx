import clsx from 'clsx';

import styles from './index.module.css';

import { webinar } from '@/content/Webinars/index.content';

import { Card } from '@/components/Webinar/Upcoming';

const Upcoming = () => {
  return (
    <section id='past'>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Past webinars</h2>
        <hr className={clsx('styled-hr', styles.hr)} />

        <div className={styles.cardsContainer}>
          {webinar.some(
            (web) => new Date().getTime() >= new Date(web.time).getTime()
          ) ? (
            webinar.map((web) => {
              if (new Date().getTime() >= new Date(web.time).getTime())
                return <Card {...web} key={web.image} />;
            })
          ) : (
            <p>There no past events are happend till now</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default Upcoming;
