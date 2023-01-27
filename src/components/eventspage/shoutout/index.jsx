import Carousel from 'better-react-carousel';
import { Tweet } from 'react-twitter-widgets';

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
        }}
      >
        <h2 className='h1'>Tweet testimonials</h2>
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
              <Tweet tweetId={id} options={{ theme: 'dark' }} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Events;

const tweetId = [
  '1559753424681717761',
  '1602588263415431170',
  '1593969175651053568',
  '1594773169713205249',
  '1613238456729341953',
  '1609515604033286144',
  '1609581274985037824',
  '1596162105971023872',
  '1616586072020111360',
];
