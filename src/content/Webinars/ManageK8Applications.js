import Poster from '@/assets/webinars/ManageK8Applications.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const ManageK8Applications = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'How to Manage and Control Kubernetes Applications Without Kubernetes Expertise',
  description:
    'Developers have a hard time managing applications deployed to Kubernetes. They need to understand how Kubernetes works, how to access clusters, and how to compose, monitor, and audit applications. As developers’ Kubernetes responsibilities keep growing, learning and maintaining all this takes precious time away from their main responsibility of delivering quality applications and producing business value.\n\nLens AppIQ is designed to help developers address these issues, giving them a platform where they can visualize and support their applications without a deep understanding of Kubernetes. It enables developers to take back control of their time and focus on application development.\n\n In this hands-on webinar, we will demonstrate how developers can use Lens AppIQ to manage their own applications, no matter what stage of the Kubernetes journey they’re in, and how they can take advantage of its app-centric approach.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/3ILs0gRtlsU',
  takeaways: [
    'Import existing applications to Lens AppIQ',
    'Deploy new apps with just a Docker image',
    'Access logs and events for their apps',
    ' Visualize the topology of an application in Kubernetes',
    'Set up alerts to monitor your app’s integrity',
    'Integrate with Lens Desktop',
  ],
  time: '28 November 2023 12:30:00 GMT',
  speakers: [
    {
      name: 'Daniel Echegaray M.',
      description: 'Principal Engineer @Mirantis',
      linkedin: 'danielechegaraym',
      img: 'https://media.licdn.com/dms/image/C4E03AQGhtfNZAMZKaw/profile-displayphoto-shrink_800_800/0/1635704257100?e=1706745600&v=beta&t=i54L3NXmmVvqlxw5sbc91IkK2FBXmgUyD6K_F73v2eg',
    },
  ],
  slug: 'manage-k8-applications',
  faq: IndividualWebinarPageFAQ,
};

export default ManageK8Applications;
