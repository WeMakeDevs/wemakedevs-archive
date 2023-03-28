import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/utils';

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
        className={clsxm(
          'inline-flex w-max items-center rounded-xl py-3 px-7 font-medium transition-all duration-75',
          'focus-visible:outline focus-visible:outline-primary',
          'disabled:cursor-not-allowed ',
          variant === 'primary' && [
            'bg-primary text-content/90',
            'ring-1 ring-primary-hover',
            'outline outline-primary/30',
            'hover:bg-primary-hover hover:text-content hover:ring-primary',
            'active:bg-primary',
            'disabled:bg-primary-disable disabled:hover:bg-primary-disable',
          ],
          variant === 'outline' && [
            'border-2 border-primary text-primary',
            'hover:bg-primary/20',
            'active:bg-primary/30 disabled:bg-primary/30',
            isDarkBg && [
              'hover:bg-base-200 focus-visible:bg-base-200',
              'active:bg-base-200/30 disabled:bg-base-200/30',
            ],
          ],
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm([
              variant === 'primary' && 'text-content',
              variant === 'loading' && 'text-primary',
            ])}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </Component>
    );
  }
);

export default Button;
