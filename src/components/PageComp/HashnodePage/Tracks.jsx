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
      'Write a blog on the topic Artifial Intelligence, share some of your learnings, and tools that you use and stand a chance to win the prize.',
    image: Track1,
  },
  {
    description:
      'Write a blog on the topic Development, share some of your tips, and learnings and stand a chance to win prize.',
    image: Track2,
  },
  {
    description:
      'Write a blog on the topic Open Source, and stand a chance to win the prize.',
    image: Track3,
  },
  {
    description:
      'Write a blog sharing some of your takeaways from hackathons. If you want to participate in one, check out AWS Amplify by Hashnode',
    image: Track4,
  },
  {
    description:
      'It is important to look back at things you have acheived to stay motivated to do even more amazing things. Half of 2023 is over, and now it\'s time to look back at all your acomplishments so far. Write about them and you can win a Mechanical Keyboard.',
    image: Special,
  },
];
