import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/utils';

const ListItem = ({ as, children, className, icon, iconClassName }) => {
  const Component = as || 'li';
  const Icon = icon || AiFillStar;
  return (
    <Component
      style={{
        display: 'flex',
        gap: '0.4rem',
      }}
      className={clsxm('tracking-wider', className)}
    >
      <Icon
        style={{ flexShrink: 0 }}
        className={clsxm('h2 text-primary', iconClassName)}
      />
      <span>{children}</span>
    </Component>
  );
};

export default ListItem;
