import clsx from 'clsx';

import styles from './index.module.css';

const Annoucnment = ({ background }) => {
  return (
    <section
      className={clsx(background === 'gradient' ? 'gradient' : 'static-bg')}
    >
      <div className={clsx('layout', styles.layout)}>
        <h3 className='heading'>
          INR 💵
          <br /> 25000
        </h3>
        <h2 className='h2'>
          Write blogs for 4 months in a row to enter a raffle for INR 25,000. 25
          such folks will also receive a private 1:1 mentorship with Kunal
          Kushwaha
        </h2>
        <div className={clsx(styles.dots, styles.left)}></div>
        <div className={clsx(styles.dots, styles.right)}></div>
      </div>
    </section>
  );
};

export default Annoucnment;
