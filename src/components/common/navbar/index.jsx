import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

import { navLinks } from './data';
import Logo from '../../../assets/common/logo.svg';
import MenuIcon from '../../../assets/navbar/menu.png';

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div className={styles['nav-container']}>
      <img className={styles['nav-logo']} src={Logo} alt='We make devs logo' />
      <nav
        className={
          navExpanded
            ? `${styles['nav-links']} ${styles['nav-links-expanded']}`
            : styles['nav-links']
        }
      >
        <ul>
          {navLinks.map((link) => {
            if (link.active) {
              return (
                <li className={styles['nav-active']} key={link.name}>
                  {link?.external ? (
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href}>{link.name}</Link>
                  )}
                </li>
              );
            }
            return (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </nav>

      <img
        className={styles['nav-menu']}
        src={MenuIcon}
        alt='Menu icon'
        onClick={() => setNavExpanded((prev) => !prev)}
      />
    </div>
  );
};

export default Navbar;
