import Poster from '@/assets/webinars/chatops-for-k8s.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const ChatOpsWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Unlock the Power of Botkube: Chatops for Kubernetes',
  description:
    "In this webinar, we will introduce you to Botkube, the ultimate collaborative troubleshooting tool designed for Kubernetes users. Botkube seamlessly integrates with popular messaging platforms like Slack, Microsoft Teams, Discord, and Mattermost, allowing you to receive alerts and take action without leaving your preferred interface. With Botkube, you'll gain instant visibility and control over your Kubernetes cluster resources, all while staying within your messaging app.It enables you to automate actions, run kubectl and Helm commands, and receive valuable recommendations for Kubernetes best practices. Say goodbye to context switching and hello to enhanced productivity. we'll showcase Botkube's key features and benefits through an engaging live demo.",
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/Z9owjkU97ok',
  takeaways: [
    'What is ChatOps?',
    'Installing and working with Botkube',
    'Explore the troubleshooting space in K8s',
  ],
  time: '27 June 2023 16:00:00 GMT',
  speakers: [
    {
      name: 'Maria Ashby',
      description: 'Developer Advocate at Botkube',
      twitter: 'Makincashby',
      img: 'https://pbs.twimg.com/profile_images/1587073588678361089/H0AN6CTl_400x400.jpg',
    },
  ],
  register: 'ChatOpsWebinar',
  slug: 'chatops-with-botkube',
  faq: IndividualWebinarPageFAQ,
};

export default ChatOpsWebinar;
