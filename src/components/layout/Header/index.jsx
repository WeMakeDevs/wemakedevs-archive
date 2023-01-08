import clsx from 'clsx';
import * as React from 'react';

import styles from './index.module.css';

import Backdrop from '../Backdrop';
import HeaderLink from '../../links/HeaderLink';
import UnstyledLink from '../../links/UnstyledLink';
import Logo from '../../../Icons/core/Logo';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={clsx('layout', styles.headerContainer)}>
          <UnstyledLink href='#'>
            <Logo />
          </UnstyledLink>
          <NavigationLinks style={styles.nav} open={open} setOpen={setOpen} />
          <button className={styles.menuBtn} onClick={() => setOpen((p) => !p)}>
            <span className='sr-only'>Menu</span>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
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
        className={styles.NavBackDrop}
      >
        <NavigationLinks
          open={open}
          setOpen={setOpen}
          style={styles.navMobile}
        />
      </Backdrop>
    </>
  );
};

export default Navbar;

const NavigationLinks = ({ style, open, setOpen }) => {
  return (
    <nav className={clsx(style, open && styles.open)}>
      {links.map((link) => (
        <HeaderLink
          onClick={() => setOpen(false)}
          href={link.href}
          key={link.name}
        >
          {link.name}
        </HeaderLink>
      ))}
    </nav>
  );
};

export const links = [
  {
    name: 'Courses',
    href: '#courses',
  },
  {
    name: 'Mentorship',
    href: '#mentorship',
  },
  {
    name: 'Events',
    href: '#events',
  },
  {
    name: 'Podcast',
    href: '#podcast',
  },
  {
    name: 'Blogs',
    href: '#blogs',
  },
  {
    name: 'Join',
    href: '#newsletter',
  },
];
