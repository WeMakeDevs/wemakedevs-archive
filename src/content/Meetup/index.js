import Delhi2023 from '@/content/Meetup/delhi-2023';

const MeetupPageFAQ = [
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
    question: 'When and where will the WeMakeDevs Delhi meetup take place? ',
    answer: 'The event will take place on May 7, 2023, in Delhi NCR.',
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

export const MeetupPageContent = {
  header: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Upcoming',
      href: '#upcoming',
    },
    // {
    //   name: 'Past',
    //   href: '#past',
    // },
    {
      name: 'Join',
      href: '#join',
    },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ],
  faq: MeetupPageFAQ,
};

export const meetups = [
  {
    img: Delhi2023.poster,
    title: Delhi2023.title,
    on: Delhi2023.on,
    slug: Delhi2023.slug,
    description: Delhi2023.description.map((item) => item.text).join(' '),
  },
];
