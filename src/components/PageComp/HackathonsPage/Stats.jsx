import { FaFontAwesomeFlag, FaUsers } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

import CounterCard from '@/components/Cards/CounterCard';

const Stats = () => {
  return (
    <div className='layout mx-auto py-20'>
      <h2 className='h1'>Numbers say it all</h2>
      <hr className='styled-hr my-6' />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <CounterCard
          icon={MdOutlineAttachMoney}
          number={40000}
          prefix='$'
          title='Prizes worth'
        />
        <CounterCard icon={FaFontAwesomeFlag} number={50} title='Countries' />
        <CounterCard icon={FaUsers} number={50000} title='Participants' />
      </div>
    </div>
  );
};

export default Stats;
