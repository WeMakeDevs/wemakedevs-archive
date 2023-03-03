import { useState } from 'react';
import CountUp from 'react-countup';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';
import ScrollTrigger from 'react-scroll-trigger';

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

const CounterCard = ({ counterOn, icon: Icon, number, title }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1 rounded-lg border border-content/20 bg-base-100/50 bg-gradient-to-r from-transparent to-base-100/10 p-4 py-10 text-center'>
      <div className='h2 flex items-center justify-center rounded-full border border-primary bg-primary p-4'>
        <Icon />
      </div>
      <div className='h2 mt-2'>
        {counterOn && <CountUp start={0} end={number} duration={2} delay={0} />}
        +
      </div>
      <div className='h3'>{title}</div>
    </div>
  );
};
