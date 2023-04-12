import { ParticularMeetupPageContent } from '@/content/Meetup/ParticularMeetupPageContent';

const DelhiMeetupFAQ = [
  {
    id: 'FAQ1',
    question: 'How do I join?',
    answer:
      'Submit the registration form, and you will receive an email with venue details if you are selected.',
  },
  {
    id: 'FAQ2',
    question: 'Why should I attend this meetup?',
    answer:
      'You will learn new skills, network with professionals in the field, stay connected to the community, socialize with like-minded people, and gain inspiration from new technologies and ideas.',
  },
  {
    id: 'FAQ3',
    question:
      'If I am not from Delhi, will I get any student scholarship if I get selected ?',
    answer:
      'Sorry for this time, you have to cover your travel expense on your own.',
  },
  {
    id: 'FAQ4',
    question: 'What are the precautions to be taken?',
    answer: 'We are experiencing rise in Covid in NCR region, we advise you to carry mask and sanitizer bottle along with you for the event.',
  },
  {
    id: 'FAQ5',
    question: 'Is it for both students and professionals?',
    answer:
      'Both professionals and students are welcome at this meetup because the talks range in difficulty from beginner to advanced. So, you can complete the registration form regardless of whether you are a student or professional.',
  },
  {
    id: 'FAQ6',
    question: 'Is it a paid event?',
    answer: 'This is a completely free-to-join and invite-only event .',
  },
];

const Delhi2023 = {
  header: ParticularMeetupPageContent.header,
  faq: DelhiMeetupFAQ,
  CTA: ParticularMeetupPageContent.CTA,
  slug: 'delhi-2023',
  poster: '/assets/images/meetup/delhi-2023/Poster.jpg',
  heroImg: '/assets/images/meetup/delhi-2023/hero.png',
  title: 'WeMakeDevs Delhi Meetup',
  description: [
    {
      text: 'WeMakeDevs always love the quality and at WeMakeDevs we try to bring the quality content for free.',
    },
    {
      text: 'We are coming up with a meetup with more than 450+ attendees and quality speakers.',
      type: 'higlight',
    },
  ],
  whyjoin: [
    'Expand your professional connections',
    'Gain valuable insights from inspiring talks',
    'Receive expert career guidance',
    'Receive cool swags',
    'Enjoy pizza',
    'All of this for free.',
  ],
  agendas: [
    // Formate for agenda
    // Time should be in GMT
    {
      title: 'Start',
      start: 'Fri, 14 Apr 2023 02:30:00 GMT',
      end: 'Fri, 14 Apr 2023 02:30:00 GMT',
      description: 'Kunal Kushwaha Introduction talk',
      speaker: 'Kunal Kushwaha',
    },
    {
      title: 'Start',
      start: 'Fri, 14 Apr 2023 02:30:00 GMT',
      end: 'Fri, 14 Apr 2023 02:30:00 GMT',
      description: 'Kunal Kushwaha Introduction talk',
      speaker: 'Kunal Kushwaha',
    },
    {
      title: 'Start',
      start: 'Fri, 14 Apr 2023 02:30:00 GMT',
      end: 'Fri, 14 Apr 2023 02:30:00 GMT',
      description: 'Kunal Kushwaha Introduction talk',
      speaker: 'Kunal Kushwaha',
    },
    {
      title: 'Start',
      start: 'Fri, 14 Apr 2023 02:30:00 GMT',
      end: 'Fri, 14 Apr 2023 02:30:00 GMT',
      description: 'Kunal Kushwaha Introduction talk',
      speaker: 'Kunal Kushwaha',
    },
  ],
  speakers: [
    {
      name: 'Kunal Kushwaha',
      description: 'DevRel Manger @Civo',
      twitter: 'kunalstwt',
      img: 'https://github.com/kunal-kushwaha.png',
    },
    {
      name: 'Apoorv Goyal',
      description: 'Remote Engineer & Web Developer',
      twitter: 'apoorvtwts',
      img: 'https://github.com/apoorv-on-git.png',
    },
    {
      description: 'More speakers to be announced soon',
    },
  ],
  sponsors: [
    // Formate for sponser
    {
      name: 'Kubesimplify',
      src: '/assets/images/meetup/delhi-2023/sponsors/kubesimplify.svg',
    },
  ],
  comuSponsors: [
    // Formate for Community sponser
    {
      name: 'Kubesimplify',
      src: '/assets/images/meetup/delhi-2023/sponsors/kubesimplify.svg',
    },
  ],
  on: 'Sun, 07 May 2023 05:00:00 GMT',
};
export default Delhi2023;
