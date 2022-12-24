import { FaMinus, FaPlus } from 'react-icons/fa';

import './index.css';

const AccordionItem = ({
  index,
  question,
  answer,
  activeItem,
  setActiveItem,
}) => {
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
        className='answer'
        style={{ display: index === activeItem ? 'block' : 'none' }}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionItem;
