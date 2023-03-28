import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
const cards = ({ background = 'static' }) => {
  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <div className={styles.cards}>
          {data.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default cards;

const Card = ({ title, link, description, btnText }) => {
  return (
    <div className={styles.card} key={title}>
      <h2 className='h1'> {title} </h2>
      <hr className='styled-hr styled-hr--dark'></hr>
      <p>{description}</p>
      <ArrowLink as={ButtonLink} className={styles.btn} href={link}>
        {btnText}
      </ArrowLink>
    </div>
  );
};

const data = [
  {
    title: 'Education',
    description:
      'We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.Our education programs are designed to be intensive, hands-on, and practical, so you can learn by doing and apply what you learn to real-world projects.',
    link: 'https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3',
    btnText: 'View Courses',
  },
  {
    title: 'Events',
    description:
      "Our events include intensive bootcamps, technical workshops, and networking events. Whether you're just starting out or looking to take your skills to the next level, we have something for everyone. Check out our current events and sign up now to reserve your spot. We look forward to seeing you at an event soon!",
    link: 'https://github.com/WeMakeDevs/events',
    btnText: 'Check Events',
  },
  {
    title: 'Mentorship',
    description:
      'Welcome to the mentorship program at WeMakeDevs! Are you an aspiring web developer looking for guidance and support on your journey? Our mentorship program is here to help. Our experienced mentors will work with you one-on-one and provide guidance, support, and advice to help you achieve your goals.',
    link: 'https://github.com/WeMakeDevs/roadmaps',
    btnText: 'View Roadmaps',
  },
];
