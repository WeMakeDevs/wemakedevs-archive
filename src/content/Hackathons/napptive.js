const { default: HackthonPageContent } = require('@/content/Hackathons');
import Steve from '@/assets/hackathon/napptive/Steve.jpeg';
import HeroImg from '@/assets/hackathon/napptive/theme.png';
const NapptiveHackathon = {
  header: HackthonPageContent.header,
  faq: HackthonPageContent.faq,
  CTA: HackthonPageContent.CTA,
  slug: 'napptive',
  title: 'Build cloud-native apps',
  description: 'Powered by Napptive',
  hero: HeroImg,
  videoUrl: 'https://www.youtube.com/embed/DwEXh-wq1TI',
  rules: [
    'The theme is open-ended, but using Napptive is mandatory. Submissions made without using Napptive will NOT be considered.',
    'You can submit to as many prize categories as you want.',
    'Teams must be comprised of 1-4 people.',
    'All design elements, code, hardware builds, etc. for your project must be created during the event. However, the use of third-party tools and frameworks is allowed along with your normal tooling. ',
    'Any intellectual property developed during the hackathon will belong to the team that developed it. The IP must be open source and you confirm you are legally entitled to create and distribute your submission material. AI-generated content will not be accepted.',
    'Submitted content must comply with the platform guidelines, terms of use, and acceptable use policy.',
    'While you are NOT supposed to begin coding in advance, you may plan and discuss the project with your team in advance. Written documents and design sketches are allowed. You may also incorporate pre-existing material that is freely available to the public such as open source components, libraries, APIs and platforms into your project.',
    'Please treat all other hackers with the utmost respect. We ask that you act kindly, behave professionally, and do not insult or put down other attendees. Remember that harassment and racist, sexist, or exclusionary jokes are not appropriate for this event. If at any point you see a fellow hacker being harassed, please talk to the nearest hackathon organizer.',
    "Please treat our sponsors, organizers, and judges with the utmost respect. Without them, nothing would be possible. Consider taking some time out of your work to go meet and speak with them. If they come over to talk to you, we ask that you give them a bit of your time. They're here for you. Show them you appreciate it!",
  ],
  criteria: [
    {
      id: 1,
      name: 'Use of Napptive',
      description: 'Does the project use Napptive?',
    },
    {
      id: 2,
      name: 'Originality',
      description: 'How original and creative is the idea of the project',
    },
    {
      id: 3,
      name: 'Implementation of the idea',
      description:
        'How well has the project been implemented in the given time frame.',
    },
    {
      id: 4,
      name: 'Potential impact',
      description: 'What future impact can the project have?',
    },
    {
      id: 5,
      name: 'Efficient use of resources',
      description: 'How well did you use the provided resources',
    },
    {
      id: 6,
      name: 'Learning',
      description:
        'How much did the overall team learn while building the project',
    },
    {
      id: 7,
      name: 'Reusability',
      description:
        'Can the project be re-used for a different use case in the future?',
    },
    {
      id: 8,
      name: 'Documentation',
      description: 'How well has the project been documented.',
    },
    {
      id: 9,
      name: 'Content quality',
      description: 'How is the quality of the content created',
    },
    {
      id: 10,
      name: 'Use-case impact',
      description:
        'What impact does the project have for a particular use case.',
    },
  ],
  prizes: [
    {
      id: 1,
      title: 'Migrate an open source application to the Open Application Model',
      guide:
        'https://docs.napptive.com/guides/deploying_a_custom_application.html',
      description:
        ', choose the open source app of your choice (e.g MySQL) and using the OAM standard, make it deployable on the Napptive Platform.',

      gift: [
        'Mechanical keyboards for all team members',
        '1:1 career mentorship and growth support by Kunal Kushwaha',
        'Swag to all team members',
        'Shoutout on socials + interviews',
      ],
    },
    {
      id: 2,
      title: 'Create application extensions',
      guide: 'https://docs.napptive.com/guides/Custom_definitions.html',
      description:
        'and get super creative customizing applications making them more extensible',

      gift: [
        'Mechanical keyboards for all team members',
        '1:1 career mentorship and growth support by Kunal Kushwaha',
        'Swag to all team members',
        'Shoutout on socials + interviews',
      ],
    },
    {
      id: 3,
      title: 'Best use-case blog post',
      guide: '',
      description:
        'Using the Open Application Model standard and its capabilities, the best blog post describing a use-case',
      gift: [
        'Mechanical keyboards for all team members',
        '1:1 career mentorship and growth support by Kunal Kushwaha',
        'Swag to all team members',
        'Shoutout on socials + interviews',
      ],
    },
  ],
  judges: [
    {
      id: 1,
      name: 'Steve Galache',
      description: 'VP of Revenue at Napptive',
      linkedin: 'steve-galache-50232253',
      img: Steve,
    },
  ],
  takepart: [
    {
      id: 1,
      title: 'Sign up to the ',
      link: {
        title: 'Napptive platform',
        href: 'https://hackathon.napptive.dev/login?campaign_source=hackathon',
      },
    },
    {
      id: 2,
      title: 'Join the ',
      link: {
        title: 'Napptive Slack channel',
        href: 'https://slack.napptive.com/',
      },
    },
    {
      id: 3,
      title: 'Checkout the ',
      link: {
        title: 'Napptive documentation',
        href: 'https://docs.napptive.com/',
      },
    },
    {
      id: 4,
      title: ' Submit your project during the hacking period using',
      link: {
        title: 'Submission form',
        href: 'https://forms.gle/3hi2Z2Gm3T7CHoxV9',
      },
    },
  ],
  from: 'Fri, 14 Apr 2023 02:30:00 GMT',
  to: 'Sun, 16 Apr 2023 14:30:00 GMT',
  winnerAnnouc: 'Mon, 17 Apr 2023 11:30:00 GMT',
};
export default NapptiveHackathon;
