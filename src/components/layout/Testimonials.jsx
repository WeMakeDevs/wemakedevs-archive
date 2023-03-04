import Carousel from 'better-react-carousel';
import { Tweet } from 'react-twitter-widgets';

const Testimonials = ({ title = 'Testimonials', tweetId }) => {
  return (
    <section id='testimonials'>
      <div className='layout flex flex-col items-center justify-center gap-6 py-20'>
        <h2 className='h1'>{title}</h2>
        <hr className='styled-hr' />
        <Carousel
          cols={3}
          rows={1}
          gap={20}
          autoplay={2500}
          dotColorActive='rgb(89,66,233)'
          showDots
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
