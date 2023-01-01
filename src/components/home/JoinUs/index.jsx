import clsx from 'clsx';
import { FaDiscord, FaScroll, FaTelegram } from 'react-icons/fa';

import styles from './index.module.css';

import UnstyledLink from '../../links/UnstyledLink';

function JoinUs() {
  return (
    <section className={styles.section} id='join'>
      <div className={clsx(styles.layout, 'layout')}>
        <h2 className='h1'>Join Us</h2>
        <hr className='styled-hr' />
        <div className={styles.wrapperCard}>
          {data.map((item) => (
            <JoinUsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinUs;

const JoinUsCard = ({ title, href, description, icon }) => {
  return (
    <UnstyledLink href={href} className={styles.container}>
      <div className={clsx(styles.card, styles[title])}>
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
    icon: <FaDiscord color='white' size='130' />,
  },
  {
    title: 'telegram',
    href: 'https://t.me/WeMakeDevs',
    description: 'Join the community of 56k+ folks',
    icon: <FaTelegram color='white' size='130' />,
  },
  {
    title: 'newsletter',
    href: 'https://blog.wemakedevs.org/',
    description: 'Join the community of 56k+ folks',
    icon: <FaScroll color='white' size='130' />,
  },
];
