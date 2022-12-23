import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/events.png';

const Events = () => {
  return (
    <ColumnSection
      id='about'
      imgSrc={BannerImage}
      title='Events'
      buttonLinks={[
        { href: 'https://blog.wemakedevs.org/', name: 'Blogging Challenges' },
        {
          href: 'https://devpost.com/hackathons?search=wemakedevs',
          name: 'Hackathons',
        },
        {
          href: 'https://github.com/wemakedevs/events',
          name: 'Meetups',
        },
      ]}
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
        in co-curricular activities and to expose them to the current trends in
        the technical and professional fields.
      </ListItem>
      <ListItem>
        Explore the plethora of events & have the opportunity to{' '}
        <span className='highlight highlight--white'>
          grab amazing prizes & goodies!
        </span>
      </ListItem>
    </ColumnSection>
  );
};

export default Events;
