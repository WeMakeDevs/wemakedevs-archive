import clsx from 'clsx';

import styles from './index.module.css';

import Button from '../../Button';
import UnstyledLink from '../../links/UnstyledLink';

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <p>
          Check out our{' '}
          <span className='highlight highlight--dark'> upcoming events </span>
          and{' '}
          <span className='highlight highlight--dark'>win exciting prizes</span>
          !
        </p>
        <Button
          className={styles.btn}
          as={UnstyledLink}
          href='https://blog.wemakedevs.org/'
        >
          Events
        </Button>
      </div>
    </section>
  );
};

export default Banner;
