import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const About = ({ background = 'static' }) => {
  return (
    <ColumnSection
      id='sec-offer'
      src='https://www.youtube.com/embed/dYIfGvwa0cU'
      isVideo
      title='About'
      direction='right'
      background={background}
    >
      <ListItem>
        The motivation behind this series is to promote learning in public.
      </ListItem>
      <ListItem>
        Students will get hands on experience with new & interesting tools.
        Don't worry, we have got your back! We will be providing resources.
      </ListItem>
      <ListItem>
        Don't know how to create a personal brand? You have come to the right
        place.
      </ListItem>
      <ListItem>Get ready to win some swags & grand prizes.</ListItem>
      <ListItem>
        Four track-based blogging challenges every month. Every track will cover
        a variety of topics.
      </ListItem>
    </ColumnSection>
  );
};

export default About;
