import Poster from '@/assets/webinars/Deploy-With-Feature-Flags.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const DeployWithFeatureFlags = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Decouple Deploy & Release: Deploying to production safely with feature flags',
  description:
    'Feature flags let you release with confidence. Join to learn all about feature flags and how they can apply to you, with a live demo of feature flagging in action.',
  poster: Poster,
  // videoUrl: 'https://www.youtube.com/embed/UTbCK92QTHw',
  takeaways: [
    'How to get started and scale with feature flags?',
    'Use cases of feature flags for global development teams',
    'Best practices for using feature flags ',
    'Learn about decoupling deploy and release, canary/phased rollouts, and releasing with confidence. ',
  ],
  CTA: {
    name: 'Register',
    href: '#register',
  },
  time: '05 October 2023 13:00:00 GMT',
  speakers: [
    {
      name: 'Ben Rometsch',
      // description: 'Hello World',
      twitter: 'benjarom3',
      img: 'https://pbs.twimg.com/profile_images/1305951808817369094/P_jm6yva_400x400.jpg',
    },
  ],
  register: 'DeployWithFeatureFlagsWebinar',
  slug: 'deploy-with-feature-flags',
  faq: IndividualWebinarPageFAQ,
};

export default DeployWithFeatureFlags;
