import clsx from 'clsx';
import TweetCarousael from 'components/TweetCarousael';

const Testimonials = ({ title = 'Testimonials', tweetId }) => {
  return (
    <section id='testimonials'>
      <div
        className={clsx('layout')}
        style={{
          paddingBlock: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <h2 className='h1'>{title}</h2>
        <hr className='styled-hr' />
        <TweetCarousael
          tweetId={tweetId}
          options={{ theme: 'dark', conversation: 'none' }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
