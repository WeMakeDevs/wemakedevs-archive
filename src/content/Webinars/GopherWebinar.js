import Poster from '@/assets/webinars/ebf.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const GopherWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: "Let's Talk About the Gopher in the Room",
  description:
    "In this talk I will explain why Golang is my go-to programming language, why you should start using it too (it's easy to learn is reason #1), and how to leverage it to become a better developer. ",
  poster: Poster,
  videoUrl: 'TBD',
  takeaways: [
    'The many benefits of Go',
    'Using Go in real-life applications',
    'Best practices and pro tips',
    'The Go ecosystem and community',
  ],
  time: '30 May 2023 16:00:00 GMT',
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
