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

import HeaderLink from '@/components/links/HeaderLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const Footer = () => {
  return (
    <footer className='bg-base-200 py-24 text-content' id='footer'>
      <div className='layout flex flex-col gap-4'>
        <div className='mx-auto grid w-full grid-cols-2 justify-between gap-4 py-4 md:grid-cols-4'>
          <div>
            <p className='h4 w-fit border-b-4 border-primary pb-1 text-gray-50'>
              Organization
            </p>
            <ul className='mt-3 space-y-4'>
              {OrganizationLink.map((link) => (
                <li key={link.name}>
                  <HeaderLink href={link.link}>{link.name}</HeaderLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='h4 w-fit border-b-4 border-primary pb-1 text-gray-50'>
              Community
            </p>
            <ul className='mt-3 space-y-4'>
              {CommunityLinks.map((link) => (
                <li key={link.name}>
                  <HeaderLink href={link.link} openNewTab>
                    {link.name}
                  </HeaderLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='h4 w-fit border-b-4 border-primary pb-1 text-gray-50'>
              Socials
            </p>
            <ul className='mt-3 space-y-4'>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <HeaderLink href={link.link}>{link.name}</HeaderLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='h4 w-fit border-b-4 border-primary pb-1 text-gray-50'>
              Contact
            </p>
            <ul className='mt-3 space-y-4'>
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <HeaderLink href={link.link}>{link.name}</HeaderLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-6 grid grid-cols-1 justify-between gap-6 border-y-2 border-content py-4 text-center lg:grid-cols-2 lg:text-left'>
          <UnstyledLink href='/#' className='h3 font-black'>
            WeMakeDevs
          </UnstyledLink>
          <div className='mx-auto flex flex-wrap items-center gap-4 lg:mr-0'>
            {links.map((link) => (
              <UnstyledLink
                key={link.name}
                href={link.link}
                aria-label={link.ariaLabel}
                className='text-2xl'
              >
                {link.icon}
              </UnstyledLink>
            ))}
          </div>
        </div>

        <p className='h4 mt-8 text-center font-medium'>
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
  { link: '/events/webinars', name: 'Webinars' },
  { link: 'https://github.com/WeMakeDevs/roadmaps', name: 'Roadmaps' },
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
