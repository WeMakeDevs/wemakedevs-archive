import Poster from '@/assets/webinars/configuration-as-code.jpg';

import {
  IndividualWebinarCompletedPageHeader,
  IndividualWebinarPageFAQ,
} from './IndividualWebinarPageContent';

const ConfigurationAsCode = {
  header: IndividualWebinarCompletedPageHeader,
  name: 'Configuration As A Code: Automating Application Configuration',
  description:
    'Join us for a webinar with Ran Cohen, Configu co-founder and CTO where you will discover a groundbreaking approach to efficiently manage application configurations and streamline your development process.',
  poster: Poster,
  videoUrl: 'https://www.youtube.com/embed/Z_Vz8v6e-U4?si=FTreIZcDWSbbBtuS',
  takeaways: ['A groundbreaking way to manage application configurations'],
  CTA: {
    name: 'Register',
    href: '#register',
  },
  time: '19 October 2023 16:00:00 GMT',
  speakers: [
    {
      name: 'Ran Cohen',
      description: 'Co-founder and CTO of Configu',
      linkedin: 'rannn505',
      img: 'https://media.licdn.com/dms/image/D4D03AQGlZEaCxrZu5g/profile-displayphoto-shrink_800_800/0/1675379538652?e=1701907200&v=beta&t=wGfOH8SOFalYgWByka6S740Rj1f4xUT1B6dl8ge2rzE',
    },
  ],
  register: 'ConfigurationAsCodeWebinar',
  slug: 'configuration-as-code',
  faq: IndividualWebinarPageFAQ,
};

export default ConfigurationAsCode;
