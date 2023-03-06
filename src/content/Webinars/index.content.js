import Devops from 'assets/courses/devops.jpg';

import { IndividualWebinarPageFAQ } from '@/content/Webinars/IndividualWebinarPageContent';

import finOpsWebinar from './finOpsWebinar';

const WebinarPageContent = {
  header: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Upcoming',
      href: '#upcoming',
    },
    {
      name: 'Past',
      href: '#past',
    },
    {
      name: 'Join',
      href: '#join',
    },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ],
  faq: IndividualWebinarPageFAQ,
};

export default WebinarPageContent;

export const webinar = [
  {
    img: Devops,
    title: finOpsWebinar.name,
    description: finOpsWebinar.description,
    time: finOpsWebinar.time,
    details: finOpsWebinar,
  },
];
