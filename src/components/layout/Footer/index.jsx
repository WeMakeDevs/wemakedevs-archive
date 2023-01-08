import clsx from 'clsx';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

import styles from './index.module.css';

import UnstyledLink from '../../../components/links/UnstyledLink';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('layout', styles.layout)}>
        <div className={styles.linkGroups}>
          <div className={styles.linkGroup}>
            <p className={styles.linksHeading}>Organization</p>
            <ul>
              {OrganizationLink.map((link) => (
                <li key={link.name}>
                  <UnstyledLink href={link.link}>{link.name}</UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linksHeading}>Community</p>
            <ul>
              {CommunityLinks.map((link) => (
                <li key={link.name}>
                  <UnstyledLink href={link.link}>{link.name}</UnstyledLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.linksHeading}>Socials</p>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <UnstyledLink href={link.link}>{link.name}</UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linksHeading}>Contact</p>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <UnstyledLink href={link.link}>{link.name}</UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
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

const OrganizationLink = [
  { link: '#about', name: 'About' },
  { link: '#testimonials', name: 'Testimonials' },
  { link: '#faq', name: 'FAQ' },
];

const CommunityLinks = [
  {
    name: 'Blog',
    link: 'https://blog.wemakedevs.org/',
  },
  { link: '#events', name: 'Events' },
  { link: '#courses', name: 'Courses' },
  { link: '#mentorship', name: 'Mentorship' },
  { link: '#newsletter', name: 'Newsletter' },
];

const socialLinks = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/wemakedevs/',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/company/wemakedevs/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/WeMakeDevs',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/WeMakeDevs',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/@WeMakeDevs',
  },
];

const contactLinks = [
  {
    name: 'kunal@wemakedevs.org',
    link: 'mailto:kunal@wemakedevs.org',
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/wemakedevs',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/WeMakeDevs',
  },
];

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
  {
    name: 'telegram',
    link: 'https://t.me/WeMakeDevs',
    icon: <FaTelegramPlane />,
  },
  {
    name: 'discord',
    link: 'https://discord.gg/wemakedevs',
    icon: <FaDiscord />,
  },
  {
    name: 'hashnode',
    link: 'https://blog.wemakedevs.org/',
    icon: <SiHashnode />,
  },
];
