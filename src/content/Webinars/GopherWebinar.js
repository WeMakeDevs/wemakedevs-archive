import Poster from '@/assets/webinars/ebf.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const BPFWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Let\'s Talk About the Gopher in the Room',
  description:
    'Why you should use Golang, and how to leverage it to become a better developer',
  poster: Poster,
  videoUrl: 'TBD',
  takeaways: [
    'The many benefits of Go',
    'Using Go in real-life applications',
    'Best practices and pro tips',
    'The Go ecosystem and community',
  ],
  time: '17 March 2023 14:00:00 GMT',
  speakers: [
    {
      name: 'Nir Shtein',
      description: 'Software Engineer at Komodor',
      twitter: 'NirShtein',
      img: 'https://pbs.twimg.com/profile_images/1549775492013871105/5crKxeZ4_400x400.jpg',
    },
  ],
  register: 'GopherWebinar',
  slug: 'benefits-of-golang',
  faq: IndividualWebinarPageFAQ,
};

export default GopherWebinar;
