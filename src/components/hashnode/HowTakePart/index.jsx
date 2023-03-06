import TweetCarousael from 'components/TweetCarousael';

import prizetweetid from '@/content/prizetweetid';

import ColumnSection from '@/components/layout/ColumnSection';
import ListItem from '@/components/Listitem';

const HowTakePart = ({ background = 'static' }) => {
  return (
    <div>
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
      <div
        className='layout'
        style={{
          paddingBottom: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <h2 className='h1'>Previous winners</h2>
        <hr className='styled-hr' />
        <TweetCarousael tweetId={prizetweetid} options={{ theme: 'dark' }} />
      </div>
    </div>
  );
};

export default HowTakePart;
