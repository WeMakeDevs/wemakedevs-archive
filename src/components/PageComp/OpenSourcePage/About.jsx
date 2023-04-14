import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const About = ({ background = 'static' }) => {
  return (
    <ColumnSection
      id='sec-offer'
      src='https://www.youtube.com/embed/msyGybzCKRs'
      isVideo
      title='About'
      direction='left'
      background={background}
    >
      <ListItem>
      Open source software is accessible to the public at no cost, allowing anyone to view, modify, and distribute its source code.
      </ListItem>
      <ListItem>
      The open source community is made up of developers and users who work together on software projects through online platforms like GitHub.
      </ListItem>
      <ListItem>
      Open source software is valued for its transparency, flexibility, and security, as the code can be reviewed and modified by anyone.
      </ListItem>
      <ListItem>Popular examples of open source software include Linux, Apache, Firefox, and WordPress</ListItem>
      
    </ColumnSection>
  );
};

export default About;
