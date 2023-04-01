import clsx from 'clsx';

import UnstyledLink from './UnstyledLink';

function HeaderLink({ className, href, children, ...rest }) {
  return (
    <UnstyledLink
      href={href}
      className={clsx(
        'relative w-max transition-all',
        'after:absolute after:right-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary after:transition-all',
        'hover:after:left-0 hover:after:right-auto hover:after:w-full',
        className
      )}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}

export default HeaderLink;
