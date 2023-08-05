import Special from 'assets/hashnode/Special-Track-2022.png';
import Track1 from 'assets/hashnode/Track-1.png';
import Track2 from 'assets/hashnode/Track-2.png';
import Track3 from 'assets/hashnode/Track-3.png';

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
      'Write a blog on the topic Productivity, share some of your best practices to stay productive and some hacks which you might use',
    image: Track1,
  },
  {
    description:
      'Write a blog on the topic Communities, share some of your expereinces in communites, how they have benefitted you and how you got involved in them',
    image: Track2,
  },
  {
    description:
      'Write a blog on the topic Soft Skills, share about some soft skills you have developed, and what techniques you used',
    image: Track3,
  },
  {
    description:
      "It is important to look back at things you have acheived to stay motivated to do even more amazing things. Half of 2023 is over, and now it's time to look back at all your acomplishments so far. Write about them and you can win a Mechanical Keyboard.",
    image: Special,
  },
];
