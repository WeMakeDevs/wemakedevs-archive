import Poster from '@/assets/webinars/Gopher.png';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const GopherWebinar = {
  header: IndividualWebinarCompletedPageHeader,
  name: "Let's Talk About the Gopher in the Room",
  description:
    'In this talk, the speakers will explain why Golang is their go-to programming language, why individuals should consider adopting it as well (with its ease of learning being the first reason), and how one can harness its power to enhance their skills as a developer.',
  poster: Poster,
  // uncomment to add video
  // videoUrl: 'https://www.youtube.com/embed/6NkICt1U1-o',
  links: [
    {
      title: 'To try Komodor for ',
      link: {
        title: 'free',
        href: 'https://hubs.li/Q01Q_Df90',
      },
    },
    {
      title: 'Join the Komodor',
      link: {
        title: 'Slack Kommunity',
        href: 'https://launchpass.com/komodorkommunity',
      },
    },
  ],
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
