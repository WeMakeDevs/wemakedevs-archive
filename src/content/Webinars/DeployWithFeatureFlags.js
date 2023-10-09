import Poster from '@/assets/webinars/Deploy-With-Feature-Flags.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const DeployWithFeatureFlags = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Decouple Deploy & Release: Deploying to Production Safely With Feature Flags',
  description:
    'Feature flags let you release with confidence. Join to learn all about feature flags and how they can apply to you, with a live demo of feature flagging in action.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/yIcFvVaFpjM',
  takeaways: [
    'How to get started and scale with feature flags?',
    'Use cases of feature flags for global development teams',
    'Best practices for using feature flags ',
    'Learn about decoupling deploy and release, canary/phased rollouts, and releasing with confidence. ',
  ],
  time: '06 October 2023 10:00:00 GMT',
  speakers: [
    {
      name: 'Ben Rometsch',
      description: 'CEO and Co-Founder of Flagsmith',
      twitter: 'benjarom3',
      linkedin: 'benrometsch',
      img: 'https://media.licdn.com/dms/image/C4E03AQGToFZFFw0qtw/profile-displayphoto-shrink_800_800/0/1516193876653?e=1701907200&v=beta&t=4bexn7c57rhiqXwaT35gTCuYapvKlb1h6dw6MgS_NVc',
    },
  ],
  register: 'DeployWithFeatureFlagsWebinar',
  slug: 'deploy-with-feature-flags',
  faq: IndividualWebinarPageFAQ,
};

export default DeployWithFeatureFlags;
