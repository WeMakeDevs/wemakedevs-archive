import clsx from 'clsx';

// import './Hashnode.css';
import styles from './index.module.css';

import Card from './Card';
import { courses } from './data';

const Courses = () => {
  return (
    <section id='courses' className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='h1'> Courses </h1>
        <hr className={clsx('styled-hr', styles.hr)} />
        <div className={styles.cardsContainer}>
          {courses.map((hashnode) => (
            <Card {...hashnode} key={hashnode.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
