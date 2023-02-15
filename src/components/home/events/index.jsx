import BannerImage from 'assets/home/latestevents.png';
import Carousel from 'better-react-carousel';
import ColumnSection from 'components/layout/ColumnSection';
import ListItem from 'components/Listitem';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { eagerLoadTwitterLibrary, Tweet } from 'react-twitter-widgets';

function InlineWrapperWithMargin({ children }) {
  return (
    <span
      style={{
        marginRight: '1.2rem',
        marginLeft: '1.2rem',
      }}
    >
      {children}
    </span>
  );
}
const Events = () => {
  const [hideTweetPost, setHideTweetPost] = useState(true);
  useEffect(() => {
    eagerLoadTwitterLibrary();
  }, []);
  return (
    <section>
      <ColumnSection
        id='events'
        as='div'
        src={BannerImage}
        title='Events'
        buttonLinks={[
          {
            href: '/events',
            name: 'Ongoing events',
          },
          {
            href: 'https://devpost.com/hackathons?search=wemakedevs',
            name: 'Hackathons',
          },
        ]}
        direction='right'
      >
        <ListItem>
          <span className='highlight highlight--white'>
            All of our events are completely free and open for everyone.
          </span>{' '}
          Fun-filled events with no compromise on quality.
        </ListItem>
        <ListItem>
          Events conducted will help{' '}
          <span className='highlight highlight--white'>
            develop various skills of students{' '}
          </span>
          in co-curricular activities and to expose them to the current trends
          in the technical and professional fields.
        </ListItem>
        <ListItem>
          Explore the plethora of events & have the opportunity to{' '}
          <span className='highlight highlight--white'>
            grab amazing prizes & goodies!
          </span>
        </ListItem>
      </ColumnSection>
      {hideTweetPost ? (
        <div className='layout'>
          <Skeleton
            count={3}
            wrapper={InlineWrapperWithMargin}
            inline
            width='30%'
            height='71vh'
            baseColor='#15202b'
            highlightColor='#6555cc'
            borderRadius='0.5rem'
          />
        </div>
      ) : null}
      <div
        className='layout'
        style={{
          paddingBottom: '5rem',
          opacity: hideTweetPost ? '0' : '1',
        }}
      >
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
                options={{ theme: 'dark' }}
                onLoad={() => setHideTweetPost(false)}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
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
