import Hashnode from 'assets/hashnode/Special-Prize.png';
import clsx from 'clsx';

import styles from './index.module.css';

const Prizes = ({ background }) => {
  return (
    <section
      id='sec-prize'
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h1 className='h1'> Current event & prize </h1>
        <hr className={clsx('styled-hr', styles.hr)} />
        <img
          className={styles.hashnodeSpecial}
          src={Hashnode}
          alt='Hashnode blogging challenge special prize'
        />
      </div>
    </section>
  );
};

export default Prizes;
