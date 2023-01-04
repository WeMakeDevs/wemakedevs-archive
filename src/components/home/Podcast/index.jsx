import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/events.png';

const Podcast = ({ background = 'static' }) => {
  return (
    <ColumnSection
      id='events'
      imgSrc={BannerImage}
      title='Podcasts'
      background={background}
      buttonLinks={[
        {
          href: 'https://www.youtube.com/watch?v=cl0zMen43E4',
          name: 'Learn More',
        },
      ]}
    >
      <ListItem>
        The Open Source Cafe is an initiative to highlight the stories,
        journeys, tips & tricks of some of the amazing community leaders and
        members.
      </ListItem>
      <ListItem>
        Learn from the expereinces of industry expert, and get mentored from
        folks around the globe.
      </ListItem>
      <ListItem>
        Grow your skills to the next level by gather tricks and tips from folks
        who have made it.
      </ListItem>
    </ColumnSection>
  );
};

export default Podcast;
