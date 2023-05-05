import clsxm from '@/lib/utils';

import TweetCarousael from '@/components/TweetCarousael';

const Testimonials = ({
  title = 'Testimonials',
  tweetId,
  as = 'section',
  className,
  setTweetId,
}) => {
  const Compoonent = as || 'section';
  return (
    <Compoonent id='testimonials'>
      <div
        className={clsxm(
          'layout flex flex-col items-center justify-center gap-6 py-20',
          className
        )}
      >
        <h2 className='h1'>{title}</h2>
        <hr className='styled-hr' />

        <TweetCarousael tweetId={tweetId} setTweetId={setTweetId} />
      </div>
    </Compoonent>
  );
};

export default Testimonials;
