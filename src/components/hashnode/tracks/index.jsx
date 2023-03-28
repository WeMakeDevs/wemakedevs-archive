import clsx from 'clsx';

// import './Hashnode.css';
import styles from './index.module.css';

import Card from './Card';
import { hashnodeData } from './data';

const Track = ({ background }) => {
  return (
    <section
      className={clsx(background === 'gradient' ? 'gradient' : 'static-bg')}
      id='sec-tracks'
    >
      <div className={clsx('layout', styles.layout)}>
        <h1 className='h1'> Current tracks </h1>
        <hr className={clsx('styled-hr', styles.hr)} />
        <div className={styles.cardsContainer} id='#roadmaps'>
          {hashnodeData.map((hashnode) => (
            <Card {...hashnode} key={hashnode.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;
