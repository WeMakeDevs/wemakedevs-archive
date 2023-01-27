import clsx from 'clsx';

import styles from './index.module.css';

import Card from '../tracks/Card';
import Hashnode from '../../../assets/hashnode/Special-Prize.png';

const Prizes = ({ background }) => {
  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h1 className='h1'> Ongoing events </h1>
        <hr className={clsx('styled-hr', styles.hr)} />
        <div className={styles.cardsContainer}>
          <Card
            description='Every month we will be having 4 tracks. You can write one or multiple blogs on the given tracks. The best blogs will receive hashnode swag.'
            image={Hashnode}
            url='/event/hashnode'
            btnText='Know more'
          />
        </div>
      </div>
    </section>
  );
};

export default Prizes;
