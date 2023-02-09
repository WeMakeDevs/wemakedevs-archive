// eslint-disable-next-line
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
export default function ScrollToTop() {
  const [goToTop, setgoToTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setgoToTop(true);
      } else {
        setgoToTop(false);
      }
    });
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
        <button onClick={toTop} className={styles['scroll--btn']}>
          <IoIosArrowDropupCircle className={styles['btn--image']} />
        </button>
      )}
    </div>
  );
}
