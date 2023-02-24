import clsx from 'clsx';

import styles from './index.module.css';

import Accordion from '@/components/Accordion/Accordion';

const FAQ = ({ background = 'static', faq }) => {
  return (
    <section
      id='faq'
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>FAQs</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.faqContainer}>
          <Accordion data={faq.slice(0, 3)}></Accordion>
          <Accordion data={faq.slice(3, 6)}></Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
