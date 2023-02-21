import NewTab from 'Icons/core/NewTab';
import * as React from 'react';
import { Link } from 'react-router-dom';

const UnstyledLink = React.forwardRef(
  (
    { children, href, openNewTab, openNewTabIcon = false, className, ...rest },
    ref
  ) => {
    // If href start with `#` then it will render Link Component from `react-router-dom`
    const isNewTab =
      openNewTab !== undefined ? openNewTab : href && !href.startsWith('/');

    // If it is not new tab then then
    if (!isNewTab) {
      return (
        <Link to={href} ref={ref} className={className} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        // If link start with # then it will not open in new tab
        {...(!href.startsWith('#') && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        href={href}
        {...rest}
        className={className}
      >
        {children}
        {openNewTabIcon && <NewTab />}
      </a>
    );
  }
);

export default UnstyledLink;
