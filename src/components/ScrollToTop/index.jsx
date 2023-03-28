// eslint-disable-next-line
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
export default function ScrollToTop() {
  const [goToTop, setgoToTop] = useState(false);
  const showBtn = () => {
    if (window.scrollY > 200) {
      setgoToTop(true);
    } else {
      setgoToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', showBtn);
    return () => {
      window.removeEventListener('scroll', showBtn);
    };
  }, []);

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles['scroll--to--top--button']}>
      {goToTop && (
        <button
          onClick={toTop}
          className={styles['scroll--btn']}
          aria-label='Click here to scroll to top'
        >
          <IoIosArrowDropupCircle className={styles['btn--image']} />
        </button>
      )}
    </div>
  );
}
