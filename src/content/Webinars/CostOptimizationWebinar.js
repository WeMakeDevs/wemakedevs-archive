import Poster from '@/assets/webinars/cloud-cost.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const CostOptimizationWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Kubernetes Cost Saving and Resource Optimization',
  description:
    'Tips and tricks for setting accurate CPU and Memory requests on Kubernetes, to save costs and optimize performance',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/GTRBsD2kDlM',
  takeaways: [
    'What causes Kubernetes costs to increase?',
    'What are the guidelines for setting resource request limits?',
    'What tools can you use to predict best resource utilization?',
  ],
  time: '28 June 2023 16:00:00 GMT',
  speakers: [
    {
      name: 'Natan Yellin',
      description: 'CEO at Robusta',
      twitter: 'aantn',
      img: 'https://pbs.twimg.com/profile_images/1647693309429661696/rFwSIv6K_400x400.jpg',
    },
  ],
  register: 'CostOptimizationWebinar',
  slug: 'kubernetes-cost-optimizations',
  faq: IndividualWebinarPageFAQ,
};

export default CostOptimizationWebinar;
