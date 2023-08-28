import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const About = () => {
  return (
    <ColumnSection
      id='about'
      src='https://cdn.pixabay.com/photo/2021/12/16/16/55/decision-6874860_1280.png'
      title='About'
      direction='left'
    >
      <ListItem>
        Engage with industry pioneers and thought leaders, gaining insights into
        their personal journeys and lessons learned.
      </ListItem>
      <ListItem>
        Navigate through unconventional career paths, discovering innovative
        approaches to achieving your professional goals.
      </ListItem>
      <ListItem>
        Immerse yourself in a supportive community of ambitious individuals,
        fostering connections that can shape your future.
      </ListItem>
      <ListItem>
        Embrace the unknown with confidence, as we equip you with the knowledge
        and inspiration needed to forge your own path.
      </ListItem>
    </ColumnSection>
  );
};

export default About;
