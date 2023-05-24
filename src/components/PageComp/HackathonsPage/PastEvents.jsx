import PastEvent2 from 'assets/events/past-event-2.jpeg';
import PastEvent8 from 'assets/events/past-event-8.jpeg';
import NapptiveBanner from 'assets/hackathon/napptive/Banner.jpg';

import DetailCard from '@/components/Cards/DetailCard';

const PastEvents = () => {
  return (
    <section id='past'>
      <div className='layout py-20'>
        <h1 className='h1'> Past events </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {eventsData.map((event) => (
            <DetailCard {...event} key={event.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;

// Data Section

const eventsData = [
  {
    description:
      'Do you want to learn new skills, discover how to build and deploy cloud native apps and meet like-minded people? Find this and much more by participating in our hackathon!',
    image: NapptiveBanner,
    url: '/events/hackathons/napptive',
    btnText: 'Know more',
  },
  {
    description:
      'WeMakeDevs <> Stream Hackathon : Hey if you are looking to learn new skills, meet interesting people, and push yourself to create something truly innovative, then you should definitely taking part in our hackathon!',
    image: PastEvent2,
    url: 'https://wemakedevs-stream.devpost.com/resources',
    btnText: 'Know more',
  },
  {
    description:
      'Cloud Native Hackathon is an initiative to bring together students, professionals, and even beginners from around the world to innovate and build projects in the domain of DevOps.',
    image: PastEvent8,
    url: 'https://cloudnativehack21.devpost.com/',
    btnText: 'Know more',
  },
];
