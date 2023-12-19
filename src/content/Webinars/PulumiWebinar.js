import Poster from '@/assets/webinars/pulumi-webinar.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const PulumiWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Learn and Build Infrastructure as Code with Pulumi AI',
  description:
    'The skills gap is real. Understanding Infrastructure as Code (IaC) is necessary to unlock multiple cloud-native careers, from cloud engineering, platform engineering, and DevOps to AI/ML-related. Learn how Pulumi AI empowers you to discover, learn, and build cloud infrastructure so you can add infrastructure as code to your skill set.',
  poster: Poster,
  videoUrl: 'https://youtube.com/embed/5K8tXgeZV0U',
  takeaways: [
    'Learn how to use Pulumi AI to set up and manage cloud infrastructure',
    'Gain insights into how Pulumi AI simplifies working with various cloud services and managing complex settings',
    'Learn how to integrate Pulumi AI into your development workflows',
  ],
  time: '21 December 2023 11:00:00 GMT',
  speakers: [
    {
      name: 'Engin Diri',
      description: 'Customer Success Architect @Pulumi',
      twitter: '_ediri',
      img: 'https://pbs.twimg.com/profile_images/1681427562998685697/-mpZuJgO_400x400.jpg',
    },
  ],
  register: 'PulumiWebinar',
  slug: 'learn-and-build-infrastructure-as-code-with-pulumi-ai',
  faq: IndividualWebinarPageFAQ,
};

export default PulumiWebinar;
