import Poster from '@/assets/webinars/livecycle-docker-compose.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const LivecycleWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Collaboration and Team Feedback with Docker Compose',
  description:
    'A walkthrough of how to use Docker Compose to collaborate with your team and get feedback from your stakeholders',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/1l_cmL57mds',
  takeaways: [
    'What is Docker Compose and why is it important for developers?',
    'What are the challenges of using Docker Compose in a team environment?',
    'How can we use Preevy on top of Compose app to unlock collaboration and the feedback cycle?',
    'How to perform Open Source Maintenance using Preevy with Actions to automate Preevy URL generation?',
    'Show the private beta/preview version of the Docker extension we are building to extend local environments to include others who want to give feedback',
    'How the global mission at Livevcycle will provide developers multiple ways to get feedback at any point of the SDLC - SaaS, SDK, Preevy, and Extension?',
  ],
  time: '14 September 2023 11:30:00 GMT',
  speakers: [
    {
      name: 'Pradumna Saraf',
      description: 'DevRel @get_livecycle',
      twitter: 'pradumna_saraf',
      img: 'https://pbs.twimg.com/profile_images/1591119953511317504/6B1Qvb11_400x400.jpg',
    },
  ],
  register: 'LivecycleWebinar',
  slug: 'team-feedback-with-docker-compose',
  faq: IndividualWebinarPageFAQ,
};

export default LivecycleWebinar;
