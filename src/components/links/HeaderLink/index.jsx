import clsx from 'clsx';

import styles from './index.module.css';

import UnstyledLink from '../UnstyledLink';

function HeaderLink({ className, href, children, ...rest }) {
  return (
    <UnstyledLink
      href={href}
      className={clsx(styles.link, className)}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}

export default HeaderLink;
