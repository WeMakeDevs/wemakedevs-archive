import clsx from 'clsx';
import * as React from 'react';

import styles from './index.module.css';

import Logo from '../../../Icons/core/Logo';
import { useStickyHeader } from '../../../lib/useSticyHeader';
import HeaderLink from '../../links/HeaderLink';
import Backdrop from '../Backdrop';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [stickyHeader, direction, scrollTop] = useStickyHeader();
  return (
    <>
      <header
        className={clsx(
          styles.header,
          direction === 'down' && styles.show,
          scrollTop < 20 && styles.top,
          scrollTop > 20 && direction === 'up' && styles.scrollUp
        )}>
        <div className={clsx('layout', styles.headerContainer)}>
          <Logo />
          <NavigationLinks style={styles.nav} />
          <button className={styles.menuBtn} onClick={() => setOpen((p) => !p)}>
            <span className='sr-only'>Menu</span>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </header>

      <Backdrop
        isBlur
        isGradient
        isDarkBg
        show={open}
        onClose={() => setOpen(false)}
        className={styles.NavBackDrop}>
        <NavigationLinks open={open} setOpen={setOpen} style={styles.navMobile} />
      </Backdrop>
    </>
  );
};

export default Navbar;

const NavigationLinks = ({ style, open, setOpen }) => {
  return (
    <nav className={clsx(style, open && styles.open)}>
      {links.map((link) => (
        <HeaderLink onClick={() => setOpen(false)} href={link.href} key={link.name}>
          {link.name}
        </HeaderLink>
      ))}
    </nav>
  );
};

export const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Courses',
    href: '#Courses'
  },
  {
    name: 'Podcasts',
    href: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr'
  },
  {
    name: 'Events',
    href: '#events'
  },
  {
    name: 'Roadmaps',
    href: '#roadmaps'
  },
  {
    name: 'Join',
    href: 'https://github.com/wemakedevs/roadmaps'
  }
];
