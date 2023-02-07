// eslint-disable-next-line
import styles from './index.module.css';
import scrllBtn from './scrllBtn.png';
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
        <img src={scrllBtn} className={styles['btn--image']} />
      </button>
    </div>
  );
}
