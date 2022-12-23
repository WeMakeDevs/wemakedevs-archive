import { AiFillStar } from 'react-icons/ai';

const ListItem = ({ as, children }) => {
  const Component = as || 'li';
  return (
    <Component
      style={{
        display: 'flex',
        gap: '0.4rem',
      }}
    >
      <AiFillStar style={{ flexShrink: 0 }} className='text-primary h2' />
      <span>{children}</span>
    </Component>
  );
};

export default ListItem;
