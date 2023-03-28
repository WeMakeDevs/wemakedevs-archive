import clsx from 'clsx';
import { FaDiscord, FaTelegram } from 'react-icons/fa';

import styles from './index.module.css';

import UnstyledLink from '@/components/links/UnstyledLink';

import NewsLetter from '../NewsLetter';

function JoinUs({ background }) {
  return (
    <section
      className={clsx(background === 'gradient' ? 'gradient' : 'static-bg')}
    >
      <div className={clsx('layout', styles.section)}>
        <div id='join' className={styles.join}>
          <div className={clsx(styles.layout, 'layout')}>
            <h2 className='h1'>Join us</h2>
            <hr className='styled-hr' />
            <div className={styles.wrapperCard}>
              {data.map((item) => (
                <JoinUsCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </section>
  );
}

export default JoinUs;

const JoinUsCard = ({ title, href, description, icon }) => {
  return (
    <UnstyledLink href={href} className={styles.container}>
      <div className={styles.card}>
        <div className={clsx(styles.face, styles.face1)}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <div className={clsx(styles.face, styles.face2)}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
};

const data = [
  {
    title: 'discord',
    href: 'https://discord.gg/wemakedevs',
    description: 'Join the community of 56k+ folks',
    icon: <FaDiscord color='white' size='100' />,
  },
  {
    title: 'telegram',
    href: 'https://t.me/WeMakeDevs',
    description: 'Stay up-to-date with news and announcements',
    icon: <FaTelegram color='white' size='100' />,
  },
];
