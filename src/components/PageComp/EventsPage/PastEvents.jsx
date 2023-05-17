import PastEvent1 from 'assets/events/past-event-1.jpeg';
import PastEvent2 from 'assets/events/past-event-2.jpeg';
import PastEvent3 from 'assets/events/past-event-3.jpeg';
import PastEvent4 from 'assets/events/past-event-4.jpeg';
import PastEvent5 from 'assets/events/past-event-5.jpeg';
import PastEvent6 from 'assets/events/past-event-6.jpeg';
import PastEvent7 from 'assets/events/past-event-7.jpeg';
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
      'WeMakeDevs is running a month long Battlesnake Battleground event. The idea is for you to build your snake, use any algorithm that you like, and compete with people around the world. Anyone with beginner-level coding knowledge can have fun with Battlesnake.',
    image: PastEvent1,
    url: 'https://youtu.be/FG4Ddsayk6A',
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
      'We at WeMakeDevs believe in education that is free for all and strive to provide support in every scope possible. We are giving away travel funds to community members to help them attend KubeCon + CNC in Detroit, USA this year. ',
    image: PastEvent5,
    url: 'https://www.youtube.com/watch?v=kpnj1JDiKyw',
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
  {
    description:
      'Cloud Native Hackathon is an initiative to bring together students, professionals, and even beginners from around the world to innovate and build projects in the domain of DevOps.',
    image: PastEvent8,
    url: 'https://cloudnativehack21.devpost.com/',
    btnText: 'Know more',
  },
];
