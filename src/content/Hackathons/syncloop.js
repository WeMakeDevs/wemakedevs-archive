import FirstPrize from 'assets/hackathon/syncloop/1st.png';
import SecondPrize from 'assets/hackathon/syncloop/2nd.png';
import ThirdPrize from 'assets/hackathon/syncloop/3rd.png';
import SyncloopBanner from 'assets/hackathon/syncloop/Banner.png';
import Rahul from 'assets/hackathon/syncloop/judge.jpg';
import Rupesh from 'assets/hackathon/syncloop/judge1.jpg';
import HeroImg from 'assets/hackathon/syncloop/theme.png';

import HackthonPageContent from '@/content/Hackathons/ParticularHackathonPageContent';

const SyncloopHackathon = {
  header: HackthonPageContent.header,
  faq: HackthonPageContent.faq,
  // CTA: HackthonPageContent.CTA,
  slug: 'syncloop',
  title: 'Unleash the API Creativity with Syncloop',
  by: 'Powered by Syncloop',
  description:
    'Unleash the API Creativity with Syncloop: Forge Seamless Connections, Elevate Developer Prowess, and Empower the Future of APIs',
  hero: HeroImg,
  image: SyncloopBanner,
  // !NOTE: Please add the respective youtube video embed URL
  videoUrl: 'https://www.youtube.com/embed/R4veRoBrcnA',
  // !NOTE: Please add the respective youtube live stream URL
  liveUrl: 'https://www.youtube.com/watch?v=R4veRoBrcnA',
  submissionForm: 'https://forms.gle/7ocbHmKXpKiVsQXN8',
  about: [
    'Syncloop is excited to host a virtual API Innovation Hackathon, bringing together developers, architects, and tech enthusiasts to showcase their creativity, problem-solving skills, and innovation in API development.',
    'The goal of this hackathon is to encourage participants to build groundbreaking API solutions using the Syncloop platform, driving advancements in API development and integration.',
  ],
  rules: [
    'Please check out the various theme requirements to be eligible for prizes.The theme is open-ended, but using Syncloop is mandatory. Submissions made without using Syncloop will NOT be considered.',
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
  tracks: [
    {
      title: 'Real-Time Data Synchronisation',
      description:
        'Build APIs that enable real-time synchronisation of data between multiple applications.',
    },
    {
      title: 'API Integration Showcase',
      description:
        'Participants can create projects that demonstrate creative integration of Syncloop APIs with popular platforms and services.',
    },
    {
      title: 'Developers Toolkit',
      description:
        'Create tools, plugins, or libraries that extend the capabilities of the Syncloop platform and enhance developers productivity.',
    },
    {
      title: 'Industry-Specific Solutions',
      description:
        'Hackathon participants can design API-driven solutions tailored for specific industries such as healthcare, e-commerce, education, etc.',
    },
  ],
  prizes: [
    {
      title: '1st Place',
      description: 'Acer Nitro 23.8 Inch Full HD Gaming Monitor',
      image: FirstPrize,
    },
    {
      title: '2nd Place',
      description: 'OnePlus Nord Watch',
      image: SecondPrize,
    },
    {
      title: '3rd Place',
      description: 'Sony Wireless On-Ear Headphones',
      image: ThirdPrize,
    },
  ],
  judges: [
    {
      name: 'Rahul Khinchi',
      description: 'Developer Advocate at Syncloop',
      twitter: 'rahhulk7',
      img: Rahul,
    },
    {
      name: 'Rupesh Gupta',
      description: 'Tech Lead',
      linkedin: 'rupesh-gupta-383b96157',
      img: Rupesh,
    },
  ],
  takepart: [
    {
      title: 'Register to the',
      link: {
        title: 'Syncloop Platform',
        href: 'https://www.syncloop.com/?utm_source=Influencer&utm_medium=Paid&utm_id=Kunal+Kushwaha',
      },
    },
    {
      title: ' Join the',
      link: {
        title: 'Syncloop Discord server and #hackathon channel.',
        href: 'https://discord.gg/Nm4kvHRdch',
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
      title: 'Check out the YouTube channel of',
      link: {
        title: 'Syncloop Platform',
        href: 'https://www.youtube.com/@syncloop',
      },
    },
    {
      title: 'Learn from the Udemy course of',
      link: {
        title: 'Syncloop',

        href: 'https://www.udemy.com/user/ekaapi/',
      },
    },
    {
      title: ' Submit your project during the hacking period using',
      link: {
        title: 'Submission form',
        href: 'https://forms.gle/7ocbHmKXpKiVsQXN8',
      },
    },
  ],
  // !NOTE: Please add the respective timeline
  timeline: [],
  from: 'Mon, 28 Aug 2023',
  to: 'Sun, 3 Sept 2023',
  // !NOTE: Please add the respective registration form link
  winnerAnnouc: 'Mon, 4 Sept 2023',
};
export default SyncloopHackathon;
