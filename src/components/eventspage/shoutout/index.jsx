import Carousel from 'better-react-carousel';
import { Tweet } from 'react-twitter-widgets';

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
          {prizetweetid.map((id) => (
            <Carousel.Item
              style={{
                width: '99%',
              }}
              key={id}
            >
              <Tweet tweetId={id} options={{ theme: 'dark' }} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Events;
