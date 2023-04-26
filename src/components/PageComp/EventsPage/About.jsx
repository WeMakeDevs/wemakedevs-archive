import AboutImage from 'assets/home/aboutus.png';
import { useState } from 'react';

import prizetweetid from '@/content/prizetweetid';

import { Testimonials } from '@/components/layout';
import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

import Stats from './Stats';

const About = () => {
  const [tweetId, setTweetId] = useState(prizetweetid);
  return (
    <section id='about'>
      <ColumnSection as='div' src={AboutImage} title='About'>
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
      <Testimonials
        as='div'
        tweetId={tweetId}
        setTweetId={setTweetId}
        title='Community testimonials'
        className='pt-0'
      />
    </section>
  );
};

export default About;
