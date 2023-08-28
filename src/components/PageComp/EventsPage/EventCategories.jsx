import Educational from 'assets/events/educational.jpg';
import Hackathon from 'assets/events/hackathon.jpg';
import Hashnode from 'assets/events/hashnode.jpg';
import Meetup from 'assets/events/meetup.jpeg';
import Roads from 'assets/events/roads.jpg';
import Scholarship from 'assets/events/scholarship.jpg';
import Super25 from 'assets/events/super25.jpg';
import Webinar from 'assets/events/webinar.jpg';

import DetailCard from '@/components/Cards/DetailCard';

const PastEvents = () => {
  return (
    <section id='events'>
      <div className='layout py-20'>
        <h1 className='h1'> Events </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {eventsData2.map((event) => (
            <DetailCard {...event} key={event.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;

// Data Section

const eventsData2 = [
  {
    title: 'Blogging challenges',
    description:
      'Every month we will be having 4 tracks. You can write one or multiple blogs on the given tracks. The best blogs will receive hashnode swag.',
    image: Hashnode,
    url: '/events/hashnode',
    btnText: 'Know more',
  },
  {
    title: 'Meetup',
    description:
      'Grow with our coding community. Engage in meetups, learn from experts, and expand your network in a welcoming environment.',
    image: Meetup,
    url: '/events/meetups',
    btnText: 'Know more',
  },
  {
    title: 'Hackathons',
    description:
      'Unleash your coding prowess at our exhilarating hackathons. Collaborate, innovate, and showcase your projects!',
    image: Hackathon,
    url: '/events/hackathons',
    btnText: 'Know more',
  },
  {
    title: 'Webinar',
    description:
      'Stay ahead with our insightful webinars. Join experts, gain valuable knowledge, and engage in interactive online learning.',
    image: Webinar,
    url: '/events/webinars',
    btnText: 'Know more',
  },
  {
    title: 'Scholarships',
    description:
      'Level up your tech journey with scholarships for various tech events. Attend top conferences, network, and advance your career in the tech landscape.',
    image: Scholarship,
    url: '/events/scholarships',
    btnText: 'Know more',
  },
  {
    title: 'Educational',
    description:
      'Embark on transformative learning at our educational events. Explore technologies, gain practical skills, and empower your success in a dynamic environment.',
    image: Educational,
    url: '/events/educational',
    btnText: 'Know more',
  },
  {
    title: 'The Road Less Travelled',
    description:
      'Embark on a journey of career excellence with our career guidance live events. Learn from experts, gain valuable insights, and advance your career in the tech landscape.',
    image: Roads,
    url: '/events/road-less-travelled',
    btnText: 'Know more',
  },
  {
    title: 'Super 25 program',
    description:
      'Expand your knowledge and enhance your skills with our expert-led webinars on a wide range of topics.',
    image: Super25,
    url: '/events/super25',
    btnText: 'Know more',
  },
];
