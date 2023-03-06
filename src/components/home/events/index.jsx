import BannerImage from 'assets/home/latestevents.png';
import TweetCarousael from 'components/TweetCarousael';

import prizetweetid from '@/content/prizetweetid';

import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const Events = () => {
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
            href: '/webinar',
            name: 'Webinars',
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
      <TweetCarousael
        tweetId={prizetweetid}
        options={{ theme: 'dark', conversation: 'none' }}
      />
    </section>
  );
};

export default Events;
