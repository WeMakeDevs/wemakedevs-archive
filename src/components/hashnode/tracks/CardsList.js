import Card from './cards';
import { hashnodeData as data } from './data';

const CardsList = ({ scrollHashnodeRef }) => {
  return (
    <div className='hashnode-container' id='#roadmaps' ref={scrollHashnodeRef}>
      {data.hashnode.map((hashnode) => (
        <>
          <Card hashnode={hashnode} />{' '}
        </>
      ))}
    </div>
  );
};

export default CardsList;
