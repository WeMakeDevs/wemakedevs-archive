import clsx from 'clsx';
import { useEffect } from 'react';

import styles from './index.module.css';

const Backdrop = ({
  className,
  isDarkBg = false,
  isTransparent = false,
  isBlur = false,
  isGradient = false,
  children,
  show = false,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <div
      className={clsx(
        styles.BackDrop,
        [
          isDarkBg && styles.isDarkBg,
          isTransparent && styles.isTransparent,
          isBlur && styles.isBlur,
          isGradient && styles.isGradient,
          show && styles.show,
        ],
        className
      )}
    >
      <div className={styles.BackDrop__onclick} onClick={onClose} />
      {children}
    </div>
  );
};

export default Backdrop;
