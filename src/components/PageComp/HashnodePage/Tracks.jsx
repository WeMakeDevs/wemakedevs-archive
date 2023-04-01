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
      'Write a blog on the topic Cloud and stand a chance to win the prize.',
    image: Track1,
  },
  {
    description:
      'Write a blog on the topic Community, share some of your best expereinces, tips and stand a chance to win prize.',
    image: Track2,
  },
  {
    description:
      'Write a blog on the topic Artifical Intelligence and stand a chance to win the prize.',
    image: Track3,
  },
  {
    description:
      'Write a blog on the topic Security, share some good tips and your experience and definitely stand a chance to win the grand prize.',
    image: Track4,
  },
  {
    description:
      'Write a blog sharing about your entire journey though tech, how you get started, what struggles did you overcome, and you can win some amazing techincal books this month!',
    image: Special,
  },
];
