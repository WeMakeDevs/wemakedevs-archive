// eslint-disable-next-line
import styles from './index.module.css';
import { IoIosArrowDropupCircle } from 'react-icons/io';
export default function ScrollToTop() {
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles['scroll--to--top--button']}>
      <button onClick={toTop} className={styles['scroll--btn']}>
        <IoIosArrowDropupCircle className={styles['btn--image']} />
      </button>
    </div>
  );
}
