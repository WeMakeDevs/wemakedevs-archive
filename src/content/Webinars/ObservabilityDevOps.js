import Poster from '@/assets/webinars/Observability-devops.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const ObservabilityDevOps = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Full-stack observability for DevOps',
  description:
    'Intro about full stack observability and how it can be achieved using Site24x7',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/UTbCK92QTHw',
  takeaways: [
    'What is full-stack observability and why is it essential for DevOps?',
    'How to optimize application performance?',
    'How can Site24x7 be used for gaining full-stack observability?',
  ],
  // CTA: {
  //   name: 'Register',
  //   href: '#register',
  // },
  time: '29 September 2023 6:00:00 GMT',
  speakers: [
    {
      name: 'Jasper Paul',
      description: 'Senior Product Manager, Site24x7',
      linkedin: 'jasper-paul-jp',
      img: 'https://media.licdn.com/dms/image/C5103AQEOdcXrMcKvkw/profile-displayphoto-shrink_800_800/0/1527268003704?e=1700697600&v=beta&t=7FdSnsyXrcr0RMcObatytXX4MyKVLVtlpWQfv06DAEA',
    },
  ],
  register: 'ObservabilityDevOpsWebinar',
  slug: 'full-stack-observability-for-devops',
  faq: IndividualWebinarPageFAQ,
};

export default ObservabilityDevOps;
