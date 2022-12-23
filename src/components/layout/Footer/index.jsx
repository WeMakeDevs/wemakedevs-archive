import clsx from 'clsx';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import styles from './index.module.css';

import UnstyledLink from '../../../components/links/UnstyledLink';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('layout', styles.layout)}>
        <div className={styles.details}>
          <div className={styles.join}>
            <h3>Join our Community</h3>
            <UnstyledLink href='https://t.me/WeMakeDevs'>
              <FaTelegram /> Telegram
            </UnstyledLink>
            <UnstyledLink href='https://discord.gg/wemakedevs'>
              <FaDiscord /> Discord
            </UnstyledLink>
          </div>
          <h3>
            Inspire, Educate,
            <br /> Empower
          </h3>
        </div>
        <div className={styles.socialSection}>
          <h3>WeMakeDevs</h3>
          <div className={styles.links}>
            {links.map((link) => (
              <UnstyledLink key={link.name} href={link.link}>
                {link.icon}
              </UnstyledLink>
            ))}
          </div>
        </div>

        <p className={styles.copyright}>
          © Copyrights by
          <span className='highlight highlight--light'> WeMakeDevs </span>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    name: 'youtube',
    link: 'https://www.youtube.com/@WeMakeDevs',
    icon: <FaYoutube />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/wemakedevs/',
    icon: <FaLinkedin />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/WeMakeDevs',
    icon: <FaTwitter />,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/wemakedevs/',
    icon: <FaInstagram />,
  },
  {
    name: 'github',
    link: 'https://github.com/WeMakeDevs',
    icon: <FaGithub />,
  },
  {
    name: 'mail',
    link: 'mailto:kunal@wemakedevs.org',
    icon: <FaEnvelope />,
  },
];
