import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';

import CounterCard from '@/components/Cards/CounterCard';

const Stats = () => {
  return (
    <div className='layout mx-auto pb-20'>
      <h2 className='h1'>Numbers say it all</h2>
      <hr className='styled-hr my-6' />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        <CounterCard icon={FaUsers} number={56000} title='Members' />
        <CounterCard icon={FaMagic} number={20000} title='Reviews' />
        <CounterCard icon={FaYoutube} number={350000} title='Reviews' />
        <CounterCard icon={FaGraduationCap} number={500} title='Colleges' />
      </div>
    </div>
  );
};

export default Stats;
