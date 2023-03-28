import TweetCarousael from 'components/TweetCarousael';

import prizetweetid from '@/content/prizetweetid';

const Events = () => {
  return (
    <>
      <section
        className='layout'
        style={{
          paddingBlock: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
          background: 'transparent',
        }}
      >
        <h2 className='h1'>Community testimonials</h2>
        <hr className='styled-hr' />
        <TweetCarousael tweetId={prizetweetid} options={{ theme: 'dark' }} />
      </section>
    </>
  );
};

export default Events;
