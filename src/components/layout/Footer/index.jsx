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

import UnstyledLink from '@/components/links/UnstyledLink';

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
                  <UnstyledLink href={link.link} openNewTab>
                    {link.name}
                  </UnstyledLink>
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
              <UnstyledLink
                key={link.name}
                href={link.link}
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </UnstyledLink>
            ))}
          </div>
        </div>

        <p className={styles.copyright}>
          © Copyrights by
          <span className='highlight highlight--light'> WeMakeDevs </span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const OrganizationLink = [
  { link: '#about', name: 'About' },
  { link: '#faq', name: 'FAQ' },
  { link: '#newsletter', name: 'Newsletter' },
];

const CommunityLinks = [
  {
    name: 'Blog',
    link: 'https://blog.wemakedevs.org/',
  },
  { link: '/events', name: 'Events' },
  { link: '/courses', name: 'Courses' },
  { link: '/webinar', name: 'Webinars' },
  { link: 'https://github.com/WeMakeDevs/roadmaps', name: 'roadmaps' },
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
    name: 'Github',
    link: 'https://github.com/WeMakeDevs',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/@KunalKushwaha',
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
    link: 'https://www.youtube.com/@KunalKushwaha',
    icon: <FaYoutube />,
    ariaLabel: 'Visit WeMakeDevs on YouTube',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/wemakedevs/',
    icon: <FaLinkedin />,
    ariaLabel: 'Visit WeMakeDevs on LinkedIn',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/WeMakeDevs',
    icon: <FaTwitter />,
    ariaLabel: 'Visit WeMakeDevs on Twitter',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/wemakedevs/',
    icon: <FaInstagram />,
    ariaLabel: 'Visit WeMakeDevs on Instagram',
  },
  {
    name: 'github',
    link: 'https://github.com/WeMakeDevs',
    icon: <FaGithub />,
    ariaLabel: 'Visit WeMakeDevs on Github',
  },
  {
    name: 'mail',
    link: 'mailto:kunal@wemakedevs.org',
    icon: <FaEnvelope />,
    ariaLabel: 'Send a mail to WeMakeDevs',
  },
  {
    name: 'telegram',
    link: 'https://t.me/WeMakeDevs',
    icon: <FaTelegramPlane />,
    ariaLabel: 'Visit WeMakeDevs on Telegram',
  },
  {
    name: 'discord',
    link: 'https://discord.gg/wemakedevs',
    icon: <FaDiscord />,
    ariaLabel: 'Visit WeMakeDevs on Discord',
  },
  {
    name: 'hashnode',
    link: 'https://blog.wemakedevs.org/',
    icon: <SiHashnode />,
    ariaLabel: 'Visit WeMakeDevs on hashnode',
  },
];
