import Carousel from 'better-react-carousel';
import { Tweet } from 'react-twitter-widgets';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/events.png';

const HowTakePart = ({ background = 'static' }) => {
  return (
    <>
      <ColumnSection
        id='sec-take-part'
        background={background}
        imgSrc={BannerImage}
        title='How to participate'
        direction='right'
      >
        <ListItem>
          Write and publish a blog of the given themes on hashnode and{' '}
          <span className='highlight highlight--white'>
            use the hashtag #WeMakeDevs while publishing it.
          </span>{' '}
        </ListItem>
        <ListItem>
          Share your blogs on Twitter and{' '}
          <span className='highlight highlight--white'>
            tag @WeMakeDevs and @hashnode.
          </span>
        </ListItem>
        <ListItem>
          We will select monthly winners from each track who will get some
          exclusive swag!
        </ListItem>
      </ColumnSection>
      <section
        className='layout'
        style={{
          paddingBottom: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <h2 className='h1'>Previous winners</h2>
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

export default HowTakePart;

const tweetId = [
  '1559753424681717761',
  '1602588263415431170',
  '1593969175651053568',
  '1594773169713205249',
  '1613238456729341953',
  '1616586072020111360',
];
