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
        The Open Source Cafe, Out of Syllabus, KlassTime with Karuna, AMA
        session on Discord is an initiative to highlight the stories, journeys,
        tips & tricks of some of the amazing community leaders and members.
      </ListItem>
      <ListItem>
        Learn from their experiences and get mentored on your journey by folks
        from around the world.
      </ListItem>
      <ListItem>
        Here is the best chance for you folks to learn from the experience of
        the industry experts.
      </ListItem>
    </ColumnSection>
  );
};

export default Podcast;
