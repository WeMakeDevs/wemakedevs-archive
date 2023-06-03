import Special from 'assets/hashnode/Special-Track-2022.png';
import Track1 from 'assets/hashnode/Track-1.png';
import Track2 from 'assets/hashnode/Track-2.png';
import Track3 from 'assets/hashnode/Track-3.png';
import Track4 from 'assets/hashnode/Track-4.png';

import TrackCard from '@/components/Cards/TrackCard';

const Tracks = () => {
  return (
    <section id='sec-tracks'>
      <div className='layout py-20'>
        <h1 className='h1'> Current Tracks </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {hashnodeData.map((event) => (
            <TrackCard {...event} key={event.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;

const hashnodeData = [
  {
    description:
      'Write a blog on the topic DevOps, share some of your learnings, and tools that you use and stand a chance to win the prize.',
    image: Track1,
  },
  {
    description:
      'Write a blog on the topic DSA, share some of your tips, and learnings and stand a chance to win prize.',
    image: Track2,
  },
  {
    description:
      'Write a blog on the topic Embedded Technologies, and stand a chance to win the prize.',
    image: Track3,
  },
  {
    description:
      'Write a blog on the topic Backend Development, share some of your knowledge and learnings, and stand a chance to win the prize.',
    image: Track4,
  },
  {
    description:
      'Record a video, sharing how participating in the blogging challenges and writing on hashnode has helped you in your learnings and brand growth, share it on Twitter, tagging @WeMakeDevs and @hashnode, and get a change to win a StreamDeck and a YouTube mentorship session with Kunal Kushwaha',
    image: Special,
  },
];
