import Carousel from 'better-react-carousel';
import clsx from 'clsx';
import { Tweet } from 'react-twitter-widgets';

const HowTakePart = () => {
  return (
    <section>
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
        <h2 className='h1'>Testimonial</h2>
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

export default HowTakePart;

const tweetId = [
  '1620824479395090435',
  '1620081639199244288',
  '1620489706994806785',
  '1620828035804184579',
  '1617535692497883138',
  '1487399069383155716',
  '1544248976664567811',
];
