import { useRef } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import './index.css';

const AccordionItem = ({
  index,
  question,
  answer,
  activeItem,
  setActiveItem,
}) => {
  const contentEl = useRef();

  return (
    <div className='accordion-item'>
      <button
        className={index === activeItem ? 'active question' : 'question'}
        onClick={() => setActiveItem(index === activeItem ? -1 : index)}
      >
        <div>{question}</div>
        <div className='icon'>
          {index !== activeItem && <FaPlus />}
          {index === activeItem && <FaMinus />}
        </div>
      </button>
      <div
        ref={contentEl}
        className='answer'
        style={
          index === activeItem
            ? {
                maxHeight: contentEl.current.scrollHeight,
              }
            : { maxHeight: '0px' }
        }
      >
        <div className='active'>{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
