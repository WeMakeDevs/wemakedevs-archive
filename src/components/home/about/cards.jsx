import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';
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

const Card = ({ title, description, btnText }) => {
  return (
    <div className={styles.card} key={title}>
      <h2 className='h1'> {title} </h2>
      <hr className='styled-hr styled-hr--dark'></hr>
      <p>{description}</p>
      <ArrowLink
        as={ButtonLink}
        className={styles.btn}
        href='https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3'
      >
        {btnText}
      </ArrowLink>
    </div>
  );
};

const data = [
  {
    title: 'Education',
    description:
      'We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.',
    link: 'https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3',
    btnText: 'View Courses',
  },
  {
    title: 'Events',
    description:
      'We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.',
    link: '/#events',
    btnText: 'Check Events',
  },
  {
    title: 'Mentorship',
    description:
      'We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.',
    link: '/#mentorship',
    btnText: 'View Roadmaps',
  },
];
