import Poster from '@/assets/webinars/surrealdb-webinar.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const SurrealDBWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'A Crash Course on SurrealDB',
  description:
    'Dive into the surreal world of SurrealDB in this interesting crash course! SurrealDB is a rust-based source available database system that pushes the boundaries of what is possible in data management. Whether you are an experienced data professional or a curious newcomer, this session will introduce you to the captivating world of SurrealDB and its remarkable features.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/rMJGKtl3y8E?si=hMe63PiG_GgOyFGA',
  takeaways: [
    'Introduction to SurrealDB',
    'Features of SurrealDB',
    'SurrealQL Basics: Record IDs, Record links, Auth, Graph links, etc.',
    'Demo of Notes App showing top features of SurrealDB',
  ],
  time: '12 October 2023 13:00:00 GMT',
  speakers: [
    {
      name: 'Aravind Putrevu',
      description: 'Advisor @surrealDB',
      twitter: 'aravindputrevu',
      img: 'https://pbs.twimg.com/profile_images/881476892309585920/i9GC4hb5_400x400.jpg',
    },
    {
      name: 'Pratim Bhosale',
      description: 'Developer Advocate @surrealDB',
      twitter: 'BhosalePratim',
      img: 'https://pbs.twimg.com/profile_images/1703805784331837440/0HIceZIa_400x400.jpg',
    },
  ],
  register: 'SurrealDBWebinar',
  slug: 'surrealdb-crash-course',
  faq: IndividualWebinarPageFAQ,
};

export default SurrealDBWebinar;
