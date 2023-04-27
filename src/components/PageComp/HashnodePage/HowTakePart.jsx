import { useState } from 'react';

import prizetweetid from '@/content/prizetweetid';

import { Testimonials } from '@/components/layout';
import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const HowTakePart = ({ background = 'static' }) => {
  const [tweetId, setTweetId] = useState(prizetweetid);
  return (
    <section>
      <ColumnSection
        as='div'
        id='sec-take-part'
        background={background}
        src='https://www.youtube.com/embed/fNp3IeB6GD4'
        isVideo
        title='How to participate'
        direction='right'
      >
        <ListItem>
          Write and publish a blog of the given themes on hashnode and{' '}
          <span className='highlight highlight--white'>
            use the hashtag #WeMakeDevs while publishing it.
          </span>{' '}
        </ListItem>
        <ListItem>
          Share your blogs on Twitter and{' '}
          <span className='highlight highlight--white'>
            tag @WeMakeDevs and @hashnode.
          </span>
        </ListItem>
        <ListItem>
          We will select monthly winners from each track who will get some
          exclusive swag!
        </ListItem>
      </ColumnSection>
      <Testimonials
        as='div'
        tweetId={tweetId}
        setTweetId={setTweetId}
        title='Previous Winner'
        className='pt-0'
      />
    </section>
  );
};

export default HowTakePart;
