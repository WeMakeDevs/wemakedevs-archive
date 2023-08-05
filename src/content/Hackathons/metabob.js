import HackthonPageContent from '@/content/Hackathons/ParticularHackathonPageContent';

import Axel from '@/assets/hackathon/metabob/Axel.jpeg';
import Massimiliano from '@/assets/hackathon/metabob/massimiliano.jpeg';
import HeroImg from '@/assets/hackathon/metabob/theme.png';

const MetabobHackathon = {
  header: HackthonPageContent.header,
  faq: HackthonPageContent.faq,
  CTA: HackthonPageContent.CTA,
  slug: 'metabob',
  title: 'Build apps with AI',
  by: 'Powered by Metabob',
  description:
    'Do you want to learn new skills, discover how to build and deploy cloud native apps and meet like-minded people? Find this and much more by participating in our hackathon!',
  hero: HeroImg,
  // !NOTE: Please add the respective youtube video ID
  videoUrl: 'https://www.youtube.com/embed/DwEXh-wq1TI',
  // !NOTE: Please add the respective youtube live stream URL
  liveUrl: 'https://www.youtube.com/watch?v=sST7JGLq2as',
  about: [
    'What if we told you, an AI could help you write better and faster code? Don’t believe us? Here’s your chance to try it out and decide for yourself! Along with leveraging the amazing features of an AI, you can also work on your development skills and build something amazing!',
    'This is your chance to meet with like-minded folks that are enthusiastic about AI and the benefits it can have in the developer ecosystem and build something amazing together. It might even become the next highly used development framework! You will have access to a cutting-edge AI tool, which will help you write code in Python that is efficient, safe and points out and helps you fix mistakes.',
    'The WeMakeDevs<>Metabob hackathon is the right place for you to get experience with hands-on development, while also taking advantage and learning how to integrate AI into developer workflows. All that you need for participating, is the will to push your limits, and learn things along the way!',
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
      name: 'Metabob Integration',
      description:
        'Does the project effectively utilize Metabob tools and features?',
    },
    {
      name: 'Innovativeness',
      description:
        'How novel and inventive is the project idea in solving a problem or addressing a need?',
    },
    {
      name: 'Implementation',
      description:
        'To what extent has the team successfully implemented and executed their idea?',
    },
    {
      name: 'Impact',
      description:
        'What potential positive effect could the project have on its intended users or the community?',
    },
    {
      name: 'Resource Efficiency',
      description:
        'How well did the team manage and optimize the use of resources (time, technology, etc.) during development?',
    },
    {
      name: 'Learning Experience',
      description:
        'Did the team members acquire new skills or knowledge while working on the project?',
    },
    {
      name: 'Reusability',
      description:
        'To what extent can the project or its components be adapted for use in other contexts or scenarios?',
    },
    {
      name: 'Documentation Quality',
      description:
        'How well is the project documented to aid future development and understanding?',
    },
    {
      name: 'Content Quality',
      description:
        'Is the project content well-presented, clear, and engaging?',
    },
    {
      name: 'Use-case Impact',
      description:
        "How relevant and significant is the project's impact on real-world use-cases or problems?",
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
      img: Axel,
    },
    {
      name: 'Massimiliano G.',
      description: 'CEO Metabob',
      linkedin: 'massimiliano-g-b58965a5',
      img: Massimiliano,
    },
  ],
  takepart: [
    {
      title: 'Try out the',
      link: {
        title: 'Metabob: Debug and Refactor with AI',
        href: 'https://marketplace.visualstudio.com/items?itemName=Metabob.metabob',
      },
    },
    {
      title: ' Submit your project during the hacking period using',
      link: {
        title: 'Submission form',
        // !NOTE: Please add the respective submission form link
        href: 'https://forms.gle/3hi2Z2Gm3T7CHoxV9',
      },
    },
    {
      title:
        'Join live stream for folks who wanna ask live questions and check the demo of the platform. ',
      link: {
        title: 'Youtube',
        // !NOTE: Please add the respective youtube live stream URL
        href: 'https://www.youtube.com/watch?v=sST7JGLq2as',
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
export default MetabobHackathon;
