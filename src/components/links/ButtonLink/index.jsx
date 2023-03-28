import clsx from 'clsx';
import { ImSpinner2 } from 'react-icons/im';

import styles from './index.module.css';

import UnstyledLink from '../UnstyledLink';

const ButtonLink = ({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'primary',
  isDarkBg = false,
  as,
  href,
  ...rest
}) => {
  const disabled = isLoading || buttonDisabled;
  const Component = as || UnstyledLink;
  return (
    <Component
      href={href}
      disabled={disabled}
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'outline' && styles.outline,
        variant === 'light-outline' && styles.lightOutline,
        isDarkBg && styles.isDarkBg,
        isLoading && styles.isLoading,
        className
      )}
      {...rest}
    >
      {isLoading && (
        <div className={styles.loading}>
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </Component>
  );
};

export default ButtonLink;
