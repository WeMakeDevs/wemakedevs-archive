import Poster from '@/assets/webinars/docker-compose.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const SimplifyWithDockerCompose = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'How Docker Compose can make life easier for you and your team',
  description:
    'This webinar explores how you can use Docker Compose to create preview enviornments to help with code reviews, and how doing so can simplify developer workflows',
  poster: Poster,
  videoUrl: null,
  takeaways: [
    "Introduce Docker Compose. What is it. Why it's needed. How it helps devs",
    'One issue with compose is getting feedback/approval because its all local',
    "Present what we're building with the extension to extend local envs to include others who want to give feedback (talk about Extension and how to publish with Preevy).",
    'This is part of our global mission at Livevcycle - to give devs multiple ways to get feedback at any point of the SDLC - SaaS, SDK, Preevy, Extension.',
  ],
  time: '28 August 2023 11:30:00 GMT',
  speakers: [
    {
      name: 'Pradumna Saraf',
      description: 'Developer Advocate at Livecycle',
      twitter: 'pradumna_saraf',
      img: 'https://pbs.twimg.com/profile_images/1591119953511317504/6B1Qvb11_400x400.jpg',
    },
  ],
  register: 'SimplifyWithDockerCompose',
  slug: 'simplify-with-docker-compose',
  faq: IndividualWebinarPageFAQ,
};

export default SimplifyWithDockerCompose;
