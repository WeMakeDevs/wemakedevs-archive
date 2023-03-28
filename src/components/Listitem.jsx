import { AiFillStar } from 'react-icons/ai';

import clsxm from '@/lib/utils';

const ListItem = ({ as, children, className }) => {
  const Component = as || 'li';
  return (
    <Component
      style={{
        display: 'flex',
        gap: '0.4rem',
      }}
      className={clsxm('font-normal tracking-wider', className)}
    >
      <AiFillStar style={{ flexShrink: 0 }} className='h2 text-primary' />
      <span>{children}</span>
    </Component>
  );
};

export default ListItem;
