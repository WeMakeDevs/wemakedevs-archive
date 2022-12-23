import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const Partner = ({ background = 'static' }) => {
  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Partner with us</h2>
        <hr className='styled-hr' />
        <p>
          You can partner with us if you want to host hackathons, talks and
          events. Let’s help each other and grow together!
        </p>
        <div className={styles.btns}>
          <ButtonLink
            as={ArrowLink}
            href='https://github.com/wemakedevs/events'
          >
            Contact us
          </ButtonLink>
          <ButtonLink
            as={ArrowLink}
            href='https://github.com/wemakedevs/events'
          >
            See Partner Testimonials
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Partner;
