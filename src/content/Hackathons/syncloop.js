import HackthonPageContent from '@/content/Hackathons/ParticularHackathonPageContent';

import Steve from '@/assets/hackathon/napptive/Steve.jpeg';
import HeroImg from '@/assets/hackathon/napptive/theme.png';

const SyncloopHackathon = {
  header: HackthonPageContent.header,
  faq: HackthonPageContent.faq,
  CTA: HackthonPageContent.CTA,
  slug: 'syncloop',
  title: 'Unleash the API Creativity with Syncloop',
  by: 'Powered by Syncloop',
  description:
    'Unleash the API Creativity with Syncloop: Forge Seamless Connections, Elevate Developer Prowess, and Empower the Future of APIs',
  hero: HeroImg,
  // !NOTE: Please add the respective youtube video ID
  videoUrl: 'https://www.youtube.com/embed/DwEXh-wq1TI',
  // !NOTE: Please add the respective youtube live stream URL
  liveUrl: 'https://www.youtube.com/watch?v=sST7JGLq2as',
  about: [
    'Syncloop is excited to host a virtual API Innovation Hackathon, bringing together developers, architects, and tech enthusiasts to showcase their creativity, problem-solving skills, and innovation in API development.',
    'The goal of this hackathon is to encourage participants to build groundbreaking API solutions using the Syncloop platform, driving advancements in API development and integration.',
  ],
  rules: [
    'Please check out the various theme requirements to be eligible for prizes.The theme is open-ended, but using Metabob is mandatory. Submissions made without using Metabob will NOT be considered.',
    'You can submit to as many prize categories as you want.',
    'All design elements, code, hardware builds, etc. for your project must be created during the event. However, the use of third-party tools and frameworks is allowed along with your normal tooling. ',
    'While you are NOT supposed to begin coding in advance, you may plan and discuss the project with your team in advance. Written documents and design sketches are allowed. You may also incorporate pre-existing material that is freely available to the public such as open source components, libraries, APIs and platforms into your project.',
    'Teams must be comprised of 1-4 people.',
    'Any intellectual property developed during the hackathon will belong to the team that developed it. The IP must be open source and you confirm you are legally entitled to create and distribute your submission material.',
    'AI-generated content will not be accepted.',
    'Submitted content must comply with the platform guidelines, terms of use, and acceptable use policy.',
    'Please treat all other hackers with the utmost respect. We ask that you act kindly, behave professionally, and do not insult or put down other attendees. Remember that harassment and racist, sexist, or exclusionary jokes are not appropriate for this event. If at any point you see a fellow hacker being harassed, please talk to the nearest hackathon organizer.',
    "Please treat our sponsors, organizers, and judges with the utmost respect. Without them, nothing would be possible. Consider taking some time out of your work to go meet and speak with them. If they come over to talk to you, we ask that you give them a bit of your time. They're here for you. Show them you appreciate it!",
  ],
  criteria: [
    {
      name: 'Innovation',
      description:
        'The uniqueness and creativity of the API solutions presented.',
    },
    {
      name: 'Functionality',
      description: 'The effectiveness and functionality of the developed APIs.',
    },
    {
      name: 'Integration',
      description:
        'The level of seamless integration demonstrated with other services or applications.',
    },
    {
      name: 'User Experience',
      description:
        'The user-friendliness and visual experience of the APIs created.',
    },
    {
      name: 'Presentation',
      description: 'The clarity and effectiveness of the final presentation.',
    },
  ],
  // !NOTE: Please add the respective prize list
  prizes: [
    {
      title: 'Communication Platform',
      description:
        'Build a platform that connects people from various parts of the world in a unified communication platform.',
      gift: ['Mechanical keyboard', 'More to be announced'],
    },
    {
      title: 'Generative AI Chatbot',
      description:
        'Using a generative AI tool like ChatGPT, develop a chatbot that functions as a virtual assistant.',
      gift: ['Mechanical keyboard', 'More to be announced'],
    },
    {
      title: 'Health & Productivity App',
      description:
        'Create a platform or application that helps users manage their health and enhances productivity.',
      gift: ['Mechanical keyboard', 'More to be announced'],
    },
    {
      title: 'Education Innovation',
      description:
        'Develop an innovative solution or application that enhances the field of education.',
      gift: ['Mechanical keyboard', 'More to be announced'],
    },
    {
      title: 'Gaming Experience',
      description:
        'Design and build an engaging and immersive gaming experience.',
      gift: ['Mechanical keyboard', 'More to be announced'],
    },
  ],
  judges: [
    {
      name: 'Axel Lönnfors',
      description: 'Product Manager at Metabob',
      linkedin: 'axel-loennfors',
      img: Steve,
    },
    {
      name: 'Massimiliano G.',
      description: 'CEO Metabob',
      linkedin: 'massimiliano-g-b58965a5',
      img: Steve,
    },
  ],
  takepart: [
    {
      title: 'Check out the youtube channel of',
      link: {
        title: 'Syncloop Platform',
        href: 'https://www.youtube.com/@syncloop',
      },
    },
    {
      title: 'Checkout the documentation of',
      link: {
        title: 'Syncloop Platform',
        href: 'https://www.syncloop.com/documentation.html?utm_source=Website&utm_medium=click&utm_id=documentation&utm_content=top-navbar',
      },
    },
    {
      title: 'Learn from udemy course of',
      link: {
        title: 'Syncloop',

        href: 'https://www.udemy.com/user/ekaapi/',
      },
    },
    {
      title: 'Join the community of',
      link: {
        title: 'Syncloop Discord',
        href: 'https://discord.gg/Nm4kvHRdch',
      },
    },
  ],
  // !NOTE: Please add the respective timeline
  timeline: [],
  from: 'Fri, 28 Jul 2023 02:30:00 GMT',
  to: 'Sun, 30 Jul 2023 14:30:00 GMT',
  // !NOTE: Please add the respective registration form link
  winnerAnnouc: 'Mon, 17 Apr 2023 11:30:00 GMT',
};
export default SyncloopHackathon;
