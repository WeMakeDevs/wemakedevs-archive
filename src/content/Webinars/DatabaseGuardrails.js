import Poster from '@/assets/webinars/DatabaseGuardrails.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const DatabaseGuardrails = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Database Guardrails - New Age For Developers and Databases',
  description:
    'Today’s industry standard for developing and maintaining databases is less than ideal. We don’t have a good way of preventing the bad code from reaching production. Once we deploy, we lack good tooling for observability and monitoring. Furthermore, we don’t have a way of troubleshooting and resolving issues reliably and automatically. Developers often don’t know how to proceed with their databases, and also often don’t own the solutions. We need something new. We need a paradigm shift and a completely novel approach: database guardrails.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/MvU1wGeA2w8',
  takeaways: [
    'Today’s industry standard for database maintenance is unacceptable.  We can’t prevent the bad code from reaching production, we lack observability, and we can’t troubleshoot automatically.',
    'Developers need to own their databases. They need database guardrails - novel approach for developing and maintaining everything around the databases.',
    'Database guardrails focus on preventing the bad code from reaching production, provide monitoring and observability focusing on semantics instead of raw metrics, and utilize signals from the whole SDLC loop to automatically identify and fix issues.',
  ],
  time: '22 November 2023 11:00:00 GMT',
  speakers: [
    {
      name: 'Adam Furmanek',
      description: 'Software Development Engineer',
      twitter: 'furmanekadam',
      img: 'https://pbs.twimg.com/profile_images/1343686092642508806/feeMNpbc_400x400.jpg',
    },
  ],
  slug: 'database-guardrails',
  faq: IndividualWebinarPageFAQ,
};

export default DatabaseGuardrails;
