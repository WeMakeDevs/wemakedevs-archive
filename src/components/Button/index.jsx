import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import styles from './index.module.css';

const Button = React.forwardRef(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      isDarkBg = false,
      as,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;
    const Component = as || 'button';
    return (
      <Component
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsx(
          styles.button,
          variant === 'primary' && styles.primary,
          variant === 'outline' && styles.outline,
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
  }
);

export default Button;
