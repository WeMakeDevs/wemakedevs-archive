import Poster from '@/assets/webinars/ebf.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const BPFWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Cloud-native observability with eBPF',
  description:
    'A walkthrough of groundcover,  a modern approach to a Kubernetes-native APM',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/jdQAU4DTsGo',
  takeaways: [
    'What is eBPF?',
    'How it can be used for practical application monitoring',
    'What is groundcover and how to get started?',
  ],
  time: '17 March 2023 14:00:00 GMT',
  speakers: [
    {
      name: 'Yechezkel Rabinovich',
      description: 'Co-Founder and CTO at groundcover',
      twitter: 'yechezkel__',
      img: 'https://pbs.twimg.com/profile_images/1564199427002228737/rxDmaeVF_400x400.jpg',
    },
    {
      name: 'Shahar Azulay',
      description: 'Co-Founder and CEO at groundcover',
      twitter: 'shahar__azulay',
      img: 'https://pbs.twimg.com/profile_images/1558796013548314624/tFEl5CDr_400x400.jpg',
    },
  ],
  register: 'BPFWebinar',
  slug: 'observability-with-ebpf',
  faq: IndividualWebinarPageFAQ,
};

export default BPFWebinar;
