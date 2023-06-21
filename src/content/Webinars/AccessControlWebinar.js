import Poster from '@/assets/webinars/access-control.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const AccessControlWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Access control done right',
  description:
    "Kubernetes has become the de facto standard for container orchestration, and its adoption is growing rapidly. However, with great power comes great responsibility, and securing Kubernetes workloads has become more challenging as they grow in complexity. In this webinar, we will discuss best practices for securing Kubernetes clusters and workloads. We will cover topics such as cluster visibility, network policies (and why they are not so easy to use), secret management, and how you can use your developer's intent to achieve pod isolation and zero trust.",
  poster: Poster,
  //videoUrl: 'TBD',
  takeaways: [
    'Understand the importance of securing Kubernetes clusters and workloads',
    'Get to know IBAC as a methodology to achieve secured access between pods and zero-trust network',
    'Demo Otterize OSS capabilities and Otterize cloud',
    'Real-life examples of problems Otterize can solve for users',
  ],
  time: '06 July 2023 16:00:00 GMT',
  speakers: [
    {
      name: 'Uri Sarid',
      description: 'Co-founder and CPO at Otterize',
      twitter: 'usarid',
      img: 'https://media.licdn.com/dms/image/C4D03AQHouKvD9PVzLA/profile-displayphoto-shrink_800_800/0/1516247358912?e=1691625600&v=beta&t=uQTrfSpgN7l2MlsTRJKiSdMuFUonGbDN37d_JUFCZ_I',
    },
  ],
  register: 'AccessControlWebinar',
  slug: 'access-control',
  faq: IndividualWebinarPageFAQ,
};

export default AccessControlWebinar;
