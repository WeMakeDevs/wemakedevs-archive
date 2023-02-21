import clsx from 'clsx';
import { useEffect, useState } from 'react';

import styles from './index.module.css';

const NewsLetter = () => {
  const [iframeHeight, setIframeHeight] = useState(670);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      setIframeHeight(830);
    } else if (windowWidth < 1250) {
      setIframeHeight(700);
    } else {
      setIframeHeight(670);
    }
  }, []);

  return (
    <div id='newsletter' className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Subscribe to our newsletter</h2>
        <hr className='styled-hr' />
        <p>Stay updated and never miss an opportunity.</p>

        <iframe
          src='https://wemakedevs-newsletter.vercel.app/'
          width='100%'
          height={iframeHeight}
          style={{ border: '0' }}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </div>
  );
};

export default NewsLetter;
