import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/utils';

import UnstyledLink from './UnstyledLink';

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
      className={clsxm(
        'inline-flex w-max items-center rounded-full py-3 px-7 font-medium transition-all duration-75',
        // before becuse of safari don't suppport rounded outline
        'focus-visible:before:absolute focus-visible:before:-top-1 focus-visible:before:-left-1 focus-visible:before:-right-1 focus-visible:before:-bottom-1 focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-primary',
        'disabled:cursor-not-allowed',
        variant === 'primary' && [
          'bg-primary text-content/90',
          'ring-1 ring-primary-hover',
          'before:border-primary/30',
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
        variant === 'light-outline' && [
          'border-2 border-content text-content',
          'hover:bg-content/20',
          'active:bg-content/30 disabled:bg-content/30',
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
};

export default ButtonLink;
