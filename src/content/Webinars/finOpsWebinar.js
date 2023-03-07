import Devops from 'assets/courses/devops.jpg';

import {
  IndividualWebinarPageFAQ,
  IndividualWebinarPageHeader,
} from './IndividualWebinarPageContent';

const finOpsWebinar = {
  header: IndividualWebinarPageHeader,
  name: 'A FinOps guide to manage and reduce cloud spend',
  description:
    'How to monitor, manage and reduce their EKS spend in a much more modern way while increasing other developers accountability',
  poster: Devops,
  takeaways: [
    'The difference in managing costs between AWS and EKS, tagging challenges.',
    "Why can't you use Cost Explorer, what open-source solutions give you",
    'How to manage CPU and Memory usage to reduce spend',
    'What do you need to communicate to your teams to improve accountability',
    'When to migrate from free tools to a full 3rd party solution',
  ],
  time: '16 April 2023 02:00:00 GMT',
  speakers: [
    {
      name: 'Roi Ravhon',
      description: 'Co-Founder & CEO at Finout',
      linkedin: 'roiravhon',
      twitter: 'roiravhon',
      img: 'https://github.com/roiravhon.png',
    },
  ],
  register: 'https://wemakedevs-newsletter.vercel.app/',
  faq: IndividualWebinarPageFAQ,
};

export default finOpsWebinar;
