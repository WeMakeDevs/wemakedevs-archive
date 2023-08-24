import Poster from '@/assets/webinars/bite-size-otterize.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const BiteSizeOtterize = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Getting started with Bite-size Otterize',
  description:
    'With the release of Bite Size Otterize let us learn how to get started securing services within your cluster one service at a time, rather than having to start a huge project to roll out network policies across your infrastructure.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/M5xMHVGEt-k',
  takeaways: [
    'What is Otterize?',
    'What is IBAC?',
    'How to use Otterize and IBAC?',
    'How to secure services in a Kubernetes cluster with Otterize and IBAC?',
  ],
  time: '24 August 2023 14:30:00 GMT',
  speakers: [
    {
      name: 'David G. Simmons',
      description: 'Head of DevRel at Otterize',
      twitter: 'davidgsIoT',
      img: 'https://pbs.twimg.com/profile_images/1604595476468318212/-fLmZ9m9_400x400.jpg',
    },
  ],
  register: 'BiteSizedOtterizeWebinar',
  slug: 'bite-sized-otterize',
  faq: IndividualWebinarPageFAQ,
};

export default BiteSizeOtterize;
