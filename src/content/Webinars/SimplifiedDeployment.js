import Poster from '@/assets/webinars/simplify-deployments.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const SimplifiedDeploymentWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Simplified Cloud-native Application Deployment with Napptive Playground and KubeVela',
  description:
    'This webinar explores how the Napptive Playground leverages Kubernetes and KubeVela to simplify the process of deploying cloud-native applications. It introduces the Open Application Model and the role of KubeVela in creating easy-to-use applications for Kubernetes. Then, it demonstrates the unique features of Napptive Playground, allowing developers to launch applications quickly even without in-depth knowledge of Kubernetes.',
  poster: Poster,
  //videoUrl: 'TBD',
  takeaways: [
    'Introduction to the Open Application Model',
    'How does the OAM model make deployments easier?',
    'Learn how to use the Napptive Playground and Kubevela to simplify cloud-native deployments',
  ],
  time: '21 June 2023 15:00:00 GMT',
  speakers: [
    {
      name: 'Daniel Higuero',
      description: 'CTO at Napptive',
      twitter: 'dhiguero',
      img: 'https://pbs.twimg.com/profile_images/647048995899068416/WtMnCepy_400x400.jpg',
    },
  ],
  register: 'SimplifiedDeploymentWebinar',
  slug: 'simplify-cloud-native-deployments',
  faq: IndividualWebinarPageFAQ,
};

export default SimplifiedDeploymentWebinar;
