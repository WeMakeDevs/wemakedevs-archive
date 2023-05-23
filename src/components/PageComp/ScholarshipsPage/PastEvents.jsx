import PastEvent5 from 'assets/events/past-event-5.jpeg';

import DetailCard from '@/components/Cards/DetailCard';

const PastEvents = () => {
  return (
    <section id='past'>
      <div className='layout py-20'>
        <h1 className='h1'> Past events </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {eventsData.map((event) => (
            <DetailCard {...event} key={event.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;

// Data Section

const eventsData = [
  {
    description:
      'We at WeMakeDevs believe in education that is free for all and strive to provide support in every scope possible. We are giving away travel funds to community members to help them attend KubeCon + CNC in Detroit, USA this year. ',
    image: PastEvent5,
    url: 'https://www.youtube.com/watch?v=kpnj1JDiKyw',
    btnText: 'Know more',
  },
];
