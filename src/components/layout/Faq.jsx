import Accordion from '@/components/Accordion';

const Faq = ({ faq }) => {
  return (
    <section id='faq'>
      <div className='layout mx-auto py-20'>
        <h2 className='h1'>FAQs</h2>
        <hr className='styled-hr my-6' />
        <div className='grid-colos-1 grid gap-8 lg:grid-cols-2 lg:gap-6'>
          <Accordion data={faq.slice(0, 3)}></Accordion>
          <Accordion data={faq.slice(3, 6)}></Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
