import Accordion from '@/components/Accordion';
import { useState, useEffect } from 'react';
const Faq = ({ faq }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id='faq'>
      <div className='layout mx-auto py-20'>
        <h2 className='h1'>FAQs</h2>
        <hr className='styled-hr my-6' />
        <div className='grid-colos-1 grid gap-8 lg:grid-cols-2 lg:gap-6'>
        {windowWidth<1024? 
        (
        <>
        <Accordion data={faq.slice(0, 6)}></Accordion>
        </>
        ) 
        : (
        <>
        <Accordion data={faq.slice(0, 3)}></Accordion>
        <Accordion data={faq.slice(3, 6)}></Accordion>
        </>
        )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
