import Carousel from 'better-react-carousel';
import clsx from 'clsx';

import styles from './index.module.css';

import { data } from './data';

const PartnerTestimonials = () => {
  return (
    <div id='testimonials'>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h2'>Testimonials</h2>
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
    </div>
  );
};

export default PartnerTestimonials;

const TestimonialCard = ({ src, description, from }) => {
  return (
    <div className={styles.card}>
      <img alt='testimonial' className={styles.img} src={src} />
      <p className={styles.description}>{description}</p>
      <hr className={clsx('styled-hr styled-hr--light', styles.hr)} />
      <h2 className={styles.name}>{from}</h2>
    </div>
  );
};
