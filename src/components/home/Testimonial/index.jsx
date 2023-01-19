import clsx from 'clsx';

import styles from './index.module.css';

import { data } from './data';

const Testimonials = () => {
  return (
    <div id='testimonials'>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Testimonials</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.cardWrapper}>
          {data.map((item) => (
            <TestimonialCard key={item.from} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({ src, description, from, designation }) => {
  return (
    <div className={styles.card}>
      <img alt='testimonial' className={styles.img} src={src} />
      <p className={styles.description}>{description}</p>
      <hr className={clsx('styled-hr styled-hr--light', styles.hr)} />
      <h2 className={styles.name}>{from}</h2>
      <p className={styles.designation}>{designation}</p>
    </div>
  );
};
