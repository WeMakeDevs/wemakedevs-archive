import AboutImage from 'assets/home/aboutus.png';

import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const About = () => {
  return (
    <ColumnSection id='about' src={AboutImage} title='About'>
      <ListItem>
        Explore events in various domains to We believe that every student,
        irrespective of their college or branch, can make it big.
      </ListItem>
      <ListItem>
        All of our courses are FREE while never compromising on quality.
      </ListItem>
      <ListItem>
        We cover every topic in detail with a hands-on approach and mentor you
        with career, Open Source, and internships, jobs around the world.
      </ListItem>
    </ColumnSection>
  );
};

export default About;
