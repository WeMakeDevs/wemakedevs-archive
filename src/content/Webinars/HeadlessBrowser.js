import Poster from '@/assets/webinars/headless-browser.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const HeadlessBrowser = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Headless Browsers',
  description:
    'One of the biggest skills that engineers can easily add is a deeper understanding of headless browsers. Whether you are just getting started with web scraping or have experience building products that rely on browser automation, this webinar will up-level you with skills and tools to take it to the next level.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/ELFH-w9P7bU',
  takeaways: [
    'Advanced approaches for web scraping & extraction',
    'Synthetic testing on a deeper level',
    'Advanced approaches for automation',
    'Asset Generation (PDF, Screenshot, etc.)',
  ],
  time: '04 October 2023 16:00:00 GMT',
  speakers: [
    {
      name: 'Joel Griffith',
      description: 'Founder and CEO of Browserless',
      twitter: 'browserless',
      img: 'https://media.licdn.com/dms/image/C5603AQGOEKgUHHaG3Q/profile-displayphoto-shrink_800_800/0/1615505042488?e=1701907200&v=beta&t=uMMkEtSqXxe8KvAOXpPP9eFPDhOEVe-r1OdygVeAwaA',
    },
  ],
  register: 'HeadlessBrowserWebinar',
  slug: 'headless-browser',
  faq: IndividualWebinarPageFAQ,
};

export default HeadlessBrowser;
