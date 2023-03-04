import Devops from 'assets/courses/devops.jpg';

import {
  IndividualWebinarPageFAQ,
  IndividualWebinarPageHeader,
} from './IndividualWebinarPageContent';

const DevOpsWorkshop = {
  header: IndividualWebinarPageHeader,
  name: 'DevOps Worksshop',
  description: 'Something about the webinar',
  poster: Devops,
  takeaways: ['What is devops', 'What is kubernaters'],
  time: 'Sat, 04 Mar 2023 07:00:19 GMT',
  speakers: [
    {
      name: 'Kunal Kushawa',
      description: 'Manger @Civo',
      twitter: 'kunaltwt',
      img: 'https://github.com/kunal-kushwaha.png',
    },
  ],
  register: 'https://wemakedevs-newsletter.vercel.app/',
  faq: IndividualWebinarPageFAQ,
};

export default DevOpsWorkshop;
