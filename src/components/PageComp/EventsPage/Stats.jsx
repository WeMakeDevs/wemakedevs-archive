import { FaFontAwesomeFlag, FaUsers } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { VscSymbolEvent } from 'react-icons/vsc';

import CounterCard from '@/components/Cards/CounterCard';

const Stats = () => {
  return (
    <div className='layout mx-auto pb-20'>
      <h2 className='h1'>Numbers say it all</h2>
      <hr className='styled-hr my-6' />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        <CounterCard
          icon={MdOutlineAttachMoney}
          number={20000}
          prefix='$'
          title='Prizes'
        />
        <CounterCard icon={FaFontAwesomeFlag} number={30} title='Countries' />
        <CounterCard icon={FaUsers} number={30000} title='Participants' />
        <CounterCard icon={VscSymbolEvent} number={200000} title='Empowered' />
      </div>
    </div>
  );
};

export default Stats;
