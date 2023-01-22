import './Hashnode.css';

import CardsList from './CardsList.js';

const index = () => {
  return (
    <section className='layout' style={{ marginTop: '9rem' }}>
      <h1
        className='h1'
        // style={{
        //   maxWidth: '1200px',
        //   margin: 'auto',
        // }}
      >
        {' '}
        Current tracks{' '}
      </h1>
      <br />
      <hr className='styled-hr' />
      <br />
      <CardsList />
    </section>
  );
};

export default index;
