import Hashnode from 'assets/hashnode/Special-Prize.png';

import DetailCard from '@/components/Cards/DetailCard';

const OngoingEvents = () => {
  return (
    <section id='ongoing'>
      <div className='layout py-20'>
        <h1 className='h1'> Ongoing events </h1>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <DetailCard
            description='Every month we will be having 4 tracks. You can write one or multiple blogs on the given tracks. The best blogs will receive hashnode swag.'
            image={Hashnode}
            url='/events/hashnode'
            btnText='Know more'
          />
        </div>
      </div>
    </section>
  );
};

export default OngoingEvents;
