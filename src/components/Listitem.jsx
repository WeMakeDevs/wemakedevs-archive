import { AiFillStar } from 'react-icons/ai';

const ListItem = ({ as, children, className }) => {
  const Component = as || 'li';
  return (
    <Component
      style={{
        display: 'flex',
        gap: '0.4rem',
      }}
      className={className}
    >
      <AiFillStar style={{ flexShrink: 0 }} className='h2 text-primary' />
      <span>{children}</span>
    </Component>
  );
};

export default ListItem;
