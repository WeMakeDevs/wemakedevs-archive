import { useState } from 'react';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';
import ScrollTrigger from 'react-scroll-trigger';

import CounterCard from '@/components/Cards/CounterCard';

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className='layout mx-auto pb-20'>
        <h2 className='h1'>Numbers say it all</h2>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <CounterCard
            counterOn={counterOn}
            icon={FaUsers}
            number={56000}
            title='Members'
          />
          <CounterCard
            counterOn={counterOn}
            icon={FaMagic}
            number={20000}
            title='Reviews'
          />
          <CounterCard
            counterOn={counterOn}
            icon={FaYoutube}
            number={350000}
            title='Reviews'
          />
          <CounterCard
            counterOn={counterOn}
            icon={FaGraduationCap}
            number={500}
            title='Colleges'
          />
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
