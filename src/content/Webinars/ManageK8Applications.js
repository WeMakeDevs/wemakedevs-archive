import Poster from '@/assets/webinars/ManageK8Applications.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const ManageK8Applications = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'How to Manage and Control Kubernetes Applications Without Kubernetes Expertise',
  description:
    'Unlock the power of Kubernetes without the complexity! Join our hands-on webinar to discover how Lens AppIQ empowers developers to effortlessly manage and control their applications at any stage of the Kubernetes journey. Say goodbye to the steep learning curve and reclaim your time for focused application development. Dive into a seamless, app-centric approach with Lens AppIQ - the key to simplifying Kubernetes management for developers.',
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
