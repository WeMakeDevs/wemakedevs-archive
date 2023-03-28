import Carousel from 'better-react-carousel';
import clsx from 'clsx';

import styles from './index.module.css';

import { data } from './data';

const Testimonials = ({ as }) => {
  const Component = as || 'div';
  return (
    <Component
      id='testimonials'
      style={{
        paddingTop: as === 'section' ? '6rem' : '0',
      }}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Testimonials</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.cardWrapper}>
          <Carousel
            cols={3}
            rows={1}
            gap={20}
            autoplay={2500}
            dotColorActive='rgb(89,66,233)'
            showDots
            hideArrow
            loop
          >
            {data.map((item) => (
              <Carousel.Item key={item.from}>
                <TestimonialCard {...item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Component>
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
