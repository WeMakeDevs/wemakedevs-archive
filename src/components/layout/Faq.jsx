// eslint-disable-next-line
import Accordion from '@/components/Accordion';
import AccordionItem from '@/components/Accordion/AccordionItem';
import { useState } from 'react';
const Faq = ({ faq }) => {
  const [activeItem, setActiveItem] = useState('-1');
  return (
    <section id='faq'>
      <div className='layout mx-auto py-20'>
        <h2 className='h1'>FAQs</h2>
        <hr className='styled-hr my-6' />
        <div className='grid-colos-1 grid gap-8 lg:gap-6'>
          {faq.map((item, index) => (
            <AccordionItem
              key={item.id}
              index={index}
              question={item.question}
              answer={item.answer}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
