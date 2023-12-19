import Poster from '@/assets/webinars/state-of-java.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const StateOfJava = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Is It Worth Learning Java in 2024?',
  description:
    'Join us for an insightful webinar as we explore the relevance of Java in 2024. In this session, we will address the pressing question of whether learning Java remains a valuable investment in your career. Discover how Java continues to play a pivotal role in various industries, gain insights into future job opportunities, and explore the exciting possibilities this versatile programming language offers.',
  poster: Poster,
  videoUrl: 'https://youtube.com/embed/ITEAqgVZAQE',
  takeaways: [
    'Gain insights into the current state of Java and its future prospects',
    'Learn about the latest developments in the Java ecosystem',
    'Discover how Java continues to play a pivotal role in various industries',
    'Explore the exciting possibilities this versatile programming language offers',
  ],
  time: '22 December 2023 10:00:00 GMT',
  speakers: [
    {
      name: 'Sébastien Blanc',
      description: 'Staff Developer Advocate @aiven_io',
      twitter: 'sebi2706',
      img: 'https://pbs.twimg.com/profile_images/1588539610489126913/68Synunh_400x400.jpg',
    },
  ],
  register: 'StateOfJava',
  slug: 'state-of-java-in-2024',
  faq: IndividualWebinarPageFAQ,
};

export default StateOfJava;
