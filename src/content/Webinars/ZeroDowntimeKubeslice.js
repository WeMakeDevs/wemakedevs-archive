import Poster from '@/assets/webinars/zero-downtime.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const ZeroDowmtime = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Zero RTO for Kubernetes Disaster Recovery with KubeSlice',
  description:
    'When you have an unexpected Kubernetes downtime, you want to keep your Recovery Time Objective (RTO) as low as possible, in order to prevent any major data loss. In this webinar, the speakers will share how you can achieve Zero RTO during the Kubernetes disaster recovery process using Kubeslice, and keep the damage to a minimum.',
  poster: Poster,
  //videoUrl: 'TBD',
  takeaways: [
    'What are some reasons for Kubernetes downtime?',
    'What is a RTO and why should it matter?',
    'Ways to reduce RTO to zero during the Kubernetes Disaster recovery process',
  ],
  time: '23 June 2023 15:00:00 GMT',
  speakers: [
    {
      name: 'Prasad Dorbala',
      description: 'Chief Product Office at Avesha',
      twitter: 'PrasadDorbala',
      img: 'https://pbs.twimg.com/profile_images/1484711704248426500/Of4r_OuK_400x400.jpg',
    },
  ],
  register: 'Zerodowntime',
  slug: 'kuberentes-disaster-recovery',
  faq: IndividualWebinarPageFAQ,
};

export default ZeroDowmtime;
