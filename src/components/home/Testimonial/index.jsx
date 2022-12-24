import clsx from 'clsx';

import styles from './index.module.css';

import ekjottest2 from './../../../assets/home/ekjottest2.jpg';
import rahultest1 from './../../../assets/home/rahultest1.jpg';
import sajjantest3 from './../../../assets/home/sajjantest3.jpg';
const Testimonials = ({ background = 'static' }) => {
  return (
    <section className={background === 'gradient' ? 'gradient' : 'static-bg'}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Testimonials</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.cardWrapper}>
          {data.map((item) => (
            <TestimonialCard key={item.from} {...item} />
          ))}
        </div>
      </div>
    </section>
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

const data = [
  {
    src: rahultest1,
    description:
      "The way this guy is teaching me Java is just Mind Blowing and Brilliant.I've never thought that these topics would be that much easier. Kudos to @kunalstwt #DSAwithKunal",
    from: 'RAHUL KUMAR',
    designation: '@rahulstwt_',
  },
  {
    src: ekjottest2,
    description:
      "Thanks @kunalstwt for helping me understand the benefits of Binary Search and how it's a lot effective than linear search. Understood the theory now and will be solving questions with @WeMakeDevs and build up the concept. #DSAwithKunal",
    from: 'EKJOT SINGH',
    designation: '@Ekjotmakhija',
  },
  {
    src: sajjantest3,
    description:
      'Done with amazing playlist of Object Oriented Programming by @kunalstwt bhaiya. Every conecpt was explained very well and got to know so many new things. Thanks kunal bhaiya for such an amazing playlist. #DSAwithKunal',
    from: 'SAJJAN YADAV',
    designation: '@SajjanStr',
  },
];
