import clsxm from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';

import NewTab from '../../Icons/core/NewTab';

const UnstyledLink = React.forwardRef(
  (
    {
      children,
      href,
      openNewTab,
      openNewTabIcon = false,
      className,
      LinkProps,
      ...rest
    },
    ref
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          to={href}
          ref={ref}
          className={className}
          {...rest}
          {...LinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm('cursor-newtab', className)}
      >
        {children}
        {openNewTabIcon && <NewTab />}
      </a>
    );
  }
);

export default UnstyledLink;
