import Poster from '@/assets/webinars/autometrics.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const AutometricsWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Application observability with Autometrics & Beyond',
  description:
    'Explore the world of application observability with Autometrics! Join our webinar to discover how function-level metrics, including latency, request rate, and error rate, can enhance your application’s performance. Learn how Autometrics, an open-source microframework based on Prometheus and OpenTelemetry, enables quick setup of function-based metrics directly from your code. Unleash the power of metrics to improve debugging efficiency, establish Service Level Objectives (SLOs), and ensure a seamless user experience. Don’t miss out on the key insights for cost-efficiently enhancing observability in your applications.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/roQX2HJODb0',
  takeaways: [
    'Basics around application observability',
    'The benefits of using open-source tooling for implementing an observability strategy',
    'Deeper dive into the topic of application metrics',
    'Introduction to OpenTelemetry and Prometheus',
    'How to leverage the open-source microframework Autometrics',
  ],
  time: '06 December 2023 10:00:00 GMT',
  speakers: [
    {
      name: 'Nele Lea',
      description: 'Fiberplane',
      twitter: 'nele_lea',
      img: 'https://pbs.twimg.com/profile_images/1657355405037535232/uE_wTa3V_400x400.jpg',
    },
  ],
  slug: 'application-observability-with-autometrics',
  faq: IndividualWebinarPageFAQ,
};

export default AutometricsWebinar;
