import Carousel from 'better-react-carousel';
import clsx from 'clsx';
import { Tweet } from 'react-twitter-widgets';

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
        <Carousel
          cols={3}
          rows={1}
          gap={20}
          autoplay={2500}
          dotColorActive='rgb(89,66,233)'
          showDots
          hideArrow
          loop
        >
          {tweetId.map((id) => (
            <Carousel.Item
              style={{
                width: '99%',
              }}
              key={id}
            >
              <Tweet
                tweetId={id}
                options={{ theme: 'dark', conversation: 'none' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
