import { Shoutout, Stats } from '..';
import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import AboutImage from '../../../assets/home/aboutus.png';

const About = ({ background = 'static' }) => {
  return (
    <section
      className={background === 'gradient' ? 'gradient' : 'static-bg'}
      id='events'
    >
      <ColumnSection id='about' as='div' src={AboutImage} title='About'>
        <ListItem>
          Explore events in various domains to{' '}
          <span className='highlight highlight--white'>upskill yourself. </span>
        </ListItem>
        <ListItem>
          Network with{' '}
          <span className='highlight highlight--white'>industry experts</span>,
          and win amazing prizes by{' '}
          <span className='highlight highlight--white'>
            showcasing your knowledge.
          </span>
        </ListItem>
        <ListItem>
          We have something for everyone, ranging from a diverse group of events
          such as{' '}
          <span className='highlight highlight--white'>
            mentorship sessions, hackathons, and tech deep dives.
          </span>
        </ListItem>
      </ColumnSection>
      <Stats />
      <Shoutout />
    </section>
  );
};

export default About;
