import clsx from 'clsx';

import styles from './index.module.css';

const NewsLetter = ({ background = 'static' }) => {
  return (
    <div
      id='newsletter'
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Subscribe to our newsletter</h2>
        <hr className='styled-hr' />
        <p>Stay updated and never miss an opportunity.</p>

        <iframe
          src='https://wemakedevs-newsletter.vercel.app/'
          width='100%'
          height='650'
          style={{ border: '0' }}
        ></iframe>
      </div>
    </div>
  );
};

export default NewsLetter;
