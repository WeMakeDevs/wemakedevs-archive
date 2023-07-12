import { useState } from 'react';

import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [activeItem, setActiveItem] = useState('-1');

  return (
    <div className='space-y-6'>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          index={index}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          {...item}
        />
      ))}
    </div>
  );
};

export default Accordion;
