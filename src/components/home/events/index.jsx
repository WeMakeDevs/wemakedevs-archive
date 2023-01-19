import Carousel from 'better-react-carousel';
import { Tweet } from 'react-twitter-widgets';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/events.png';

const Events = ({ background = 'static' }) => {
  return (
    <section className={background === 'gradient' ? 'gradient' : 'static-bg'}>
      <ColumnSection
        id='events'
        as='div'
        imgSrc={BannerImage}
        title='Events'
        buttonLinks={[
          {
            href: 'https://github.com/WeMakeDevs/events',
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
      <div
        className='layout'
        style={{
          paddingBottom: '5rem',
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
              <Tweet tweetId={id} options={{ theme: 'dark' }} />
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
];
