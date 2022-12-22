import styles from './index.module.css';
const Partner = () => {
  return (
    <section className={styles['partner']}>
      <div className={styles['partner_cont']}>
        <div className={styles['partner_cont_1']}>
          <h1> Partner with us </h1>
          <p>
            {' '}
            You can partner with us if you want to host hackathons, talks and
            events. Let’s help each other and grow together!{' '}
          </p>
          <div className={styles['partner-button']}>
            <a
              href='https://github.com/wemakedevs/events'
              className='link-normal'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contact us
            </a>
            <a
              href='https://github.com/wemakedevs/events'
              className='link-normal'
              target='_blank'
              rel='noopener noreferrer'
            >
              See Partner Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
