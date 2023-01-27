import clsx from 'clsx';

import styles from './index.module.css';

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
        <a href='https://github.com/WeMakeDevs/events/blob/main/hashnode/README.md'>
          <img className={styles.hashnodeSpecial} src={Hashnode} />
        </a>
      </div>
    </section>
  );
};

export default Prizes;
