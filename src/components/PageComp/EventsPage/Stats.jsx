import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { VscSymbolEvent } from 'react-icons/vsc';
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
            icon={MdOutlineAttachMoney}
            number={20000}
            prefix='$'
            title='Prizes'
          />
          <CounterCard
            counterOn={counterOn}
            icon={FaFontAwesomeFlag}
            number={30}
            title='Countries'
          />
          <CounterCard
            counterOn={counterOn}
            icon={FaUsers}
            number={30000}
            title='Participants'
          />
          <CounterCard
            counterOn={counterOn}
            icon={VscSymbolEvent}
            number={200000}
            title='Empowered'
          />
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
