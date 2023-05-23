import PastEvent1 from 'assets/events/past-event-1.jpeg';
import PastEvent3 from 'assets/events/past-event-3.jpeg';
import PastEvent4 from 'assets/events/past-event-4.jpeg';
import PastEvent6 from 'assets/events/past-event-6.jpeg';
import PastEvent7 from 'assets/events/past-event-7.jpeg';

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
      'WeMakeDevs is running a month long Battlesnake Battleground event. The idea is for you to build your snake, use any algorithm that you like, and compete with people around the world. Anyone with beginner-level coding knowledge can have fun with Battlesnake.',
    image: PastEvent1,
    url: 'https://youtu.be/FG4Ddsayk6A',
    btnText: 'Know more',
  },
  {
    description:
      'What if we told you that you can get $1500 stipend, MacBooks, and remote job offers via an event? If you want to get started in open source, then this program is for you.',
    image: PastEvent3,
    url: 'https://www.youtube.com/watch?v=MI--kEdwEaU',
    btnText: 'Know more',
  },
  {
    description:
      'Join Wilco to practice and acquire new dev skills in a “flight simulator” for software engineers, using the tech stack of your choice. Complete Wilco quests during August to win awesome prizes! ',
    image: PastEvent4,
    url: 'https://www.youtube.com/watch?v=WXvzjvHuMFU',
    btnText: 'Know more',
  },
  {
    description:
      'We are excited to announce the Kubernetes security week by Kubescape. The idea is to get folks to use Kubescape and share their experiences and stories in the form of blog posts.',
    image: PastEvent6,
    url: 'https://www.youtube.com/watch?v=SDpacCd5518',
    btnText: 'Know more',
  },
  {
    description:
      'Learn to code and lead your intrepid crew on a mission to save The Cloud in TwilioQuest, a PC role-playing game inspired by classics of the 16-bit era. Get hands-on experience with contributing to Open Source and JavaScript fundamentals. Join the leaderboard and win exciting prizes such as KCNA vouchers worth $299 and 1:1 mentorship sessions 🔥',
    image: PastEvent7,
    url: 'https://www.youtube.com/watch?v=Nxja-95Z2zc',
    btnText: 'Know more',
  },
];
