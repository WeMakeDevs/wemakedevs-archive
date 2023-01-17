import clsx from 'clsx';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import styles from './index.module.css';

import Button from '../../Button';
import UnstyledLink from '../../links/UnstyledLink';

const Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className={clsx(styles.section, !open && styles.hide)}>
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
        <Button
          variant='outline'
          className={clsx('h3', styles.btn, styles.cross)}
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </Button>
      </div>
    </section>
  );
};

export default Banner;
