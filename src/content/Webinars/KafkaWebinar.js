import Poster from '@/assets/webinars/kafka/poster.png';
import Speaker from '@/assets/webinars/kafka/speaker.jpeg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const KafkaWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Deploying Kafka Brokers in Multiple Clouds with KubeSlice',
  description:
    'Apache Kafka has emerged as the central nervous system for businesses enabling real-time event streaming. This webinar will explore how KubeSlice simplifies the deployment of Kafka across multi-cloud environments, unlocking new use cases and driving business value.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/ZHTIux_cGzg',
  takeaways: [
    'Understanding the Kafka Revolution',
    'The shift to a centralized event streaming paradigm.',
    'Real-world examples of Kafka deployment in retail, insurance, banking, and more.',
    'Seamless Kafka Deployment across Multi-Cluster Environments with KubeSlice Deploying Kafka brokers across various Kubernetes clusters.',
    'Application in single clouds, multi-cloud, and hybrid environments. Optimizing Kafka Communication',
    'Strategies for resilience, scalability, and high availability. Real-time analytics and actionable insights.',
    'Unified Control, Security, and Compliance with KubeSlice Unified management of resources and access privileges.',
    'Use Cases and Real-World Applications with Multi-Cluster Kafka',
  ],
  time: '21 Augest 2023 16:00:00 GMT',
  speakers: [
    {
      name: 'Prasad Dorbala',
      description: 'Chief Product Officer at Avesha',
      linkedin: 'prasad-dorbala',
      img: Speaker,
    },
    {
      name: 'Olyvia Rakshit',
      description: 'VP Marketing and Product UX at Avesha',
      linkedin: 'olyviar',
      img: 'https://media.licdn.com/dms/image/C5603AQGBsnsig7SpNA/profile-displayphoto-shrink_800_800/0/1596214090727?e=1698278400&v=beta&t=rLl7PqIdT4BJuqEZINW1CtSXmlpDhrPCLSA9bIcCoaY',
    },
  ],
  register: 'KafkaWebinar',
  slug: 'multiple-clouds-with-kubeslice',
  faq: IndividualWebinarPageFAQ,
};

export default KafkaWebinar;
