import BannerImage from 'assets/home/latestevents.png';
import ColumnSection from 'components/layout/ColumnSection';
import ListItem from 'components/Listitem';
import SkeletonCard from 'components/SkeletonCard';

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
      <SkeletonCard
        tweetId={tweetId}
        options={{ theme: 'dark', conversation: 'none' }}
      />
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
