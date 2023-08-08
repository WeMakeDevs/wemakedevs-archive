import PastEvent2 from 'assets/events/past-event-2.jpeg';
import PastEvent8 from 'assets/events/past-event-8.jpeg';
import NapptiveBanner from 'assets/hackathon/napptive/Banner.jpg';

import NapptiveHackathonContent from '@/content/Hackathons/napptive';
import SyncloopHackathon from '@/content/Hackathons/syncloop';

export const hackathonDataList = [
  {
    title: SyncloopHackathon.title,
    description: SyncloopHackathon.description,
    image: SyncloopHackathon.image,
    url: `/events/hackathons/${SyncloopHackathon.slug}`,
    btnText: 'Learn more',
    content: SyncloopHackathon,
    hasContent: true,
    date: SyncloopHackathon.to,
  },
  {
    title: NapptiveHackathonContent.title,
    description: NapptiveHackathonContent.description,
    image: NapptiveBanner,
    url: `/events/hackathons/${NapptiveHackathonContent.slug}`,
    btnText: 'Learn more',
    content: NapptiveHackathonContent,
    hasContent: true,
    date: NapptiveHackathonContent.to,
  },
  {
    title: 'Stream hackathon',
    description:
      'WeMakeDevs <> Stream Hackathon : Hey if you are looking to learn new skills, meet interesting people, and push yourself to create something truly innovative, then you should definitely taking part in our hackathon!',
    image: PastEvent2,
    url: 'https://wemakedevs-stream.devpost.com/resources',
    btnText: 'Learn more',
    hasContent: false,
    date: 'Sun, 18 Dec 2022 14:30:00 GMT',
  },
  {
    title: 'Cloud Native hackathon',
    description:
      'Cloud Native Hackathon is an initiative to bring together students, professionals, and even beginners from around the world to innovate and build projects in the domain of DevOps.',
    image: PastEvent8,
    url: 'https://cloudnativehack21.devpost.com/',
    btnText: 'Learn more',
    hasContent: false,
    date: 'Mon, 12 Dec 2022 14:30:00 GMT',
  },
];
