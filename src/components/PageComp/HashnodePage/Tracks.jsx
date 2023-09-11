import Special from 'assets/hashnode/Special-Track.png';
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
      'Write a blog on Artificial Intelligence, share some of your experiences in AI, how they have benefitted you and how you got involved in them',
    image: Track1,
  },
  {
    description:
      'Write a blog on Development, share about some of your projects, how you got started with them and what you learnt from them',
    image: Track2,
  },
  {
    description:
      'Write a blog on DevOps, share some of the best practices you follow, and how they have helped you in your projects',
    image: Track3,
  },
  {
    description:
      'Write a blog on Security, share some of the best practices you follow, and how one can get started with them',
    image: Track4,
  },
  {
    description:
      "It is all about a free topic, you can write about anything you want, it can be about your experiences, your journey, your learnings, anything you want to share with the world. Let's see what you have got!",
    image: Special,
  },
];
