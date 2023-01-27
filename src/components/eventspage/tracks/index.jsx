import clsx from 'clsx';

// import './Hashnode.css';
import styles from './index.module.css';

import Card from './Card';
import { eventsData } from './data';

const Track = () => {
  return (
    <section style={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='h1'> Past events </h1>
        <hr className={clsx('styled-hr', styles.hr)} />
        <div className={styles.cardsContainer} id='#roadmaps'>
          {eventsData.map((hashnode) => (
            <Card {...hashnode} key={hashnode.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;
