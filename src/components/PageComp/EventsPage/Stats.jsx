import { useState } from 'react';
import { BsFillTrophyFill } from 'react-icons/bs';
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
            number={70}
            title='Countries'
          />
          <CounterCard
            counterOn={counterOn}
            icon={BsFillTrophyFill}
            number={100}
            title='Winners'
          />
          <CounterCard
            counterOn={counterOn}
            icon={VscSymbolEvent}
            number={10}
            title='Events'
          />
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
