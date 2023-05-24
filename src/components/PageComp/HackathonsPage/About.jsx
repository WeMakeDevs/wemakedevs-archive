import AboutImage from 'assets/events/hackathon.jpg';

import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const About = () => {
  return (
    <section id='about'>
      <ColumnSection as='div' src={AboutImage} title='About'>
        <ListItem>
          Embrace teamwork and collaboration in our inclusive and supportive
          environment.
        </ListItem>
        <ListItem>
          Exciting prizes and valuable networking opportunities await
          top-performing participants.
        </ListItem>
        <ListItem>
          Diverse themes ensure a wide range of hackathon experiences for all
          interests.
        </ListItem>
      </ColumnSection>
    </section>
  );
};

export default About;
