import clsx from 'clsx';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TfiAnnouncement } from 'react-icons/tfi';

import styles from './index.module.css';

import Button from '@/components/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
const Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className={clsx(styles.section, !open && styles.hide)}>
      <div className={clsx(styles.layout)}>
        <TfiAnnouncement className={clsx('h1', styles.announcement)} />
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
          openNewTab
          href='/events'
        >
          Events
        </Button>
        <button
          className={clsx('h3', styles.cross)}
          onClick={() => setOpen(false)}
          aria-label='close button'
        >
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default Banner;
