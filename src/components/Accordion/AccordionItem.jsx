import { useRef } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import clsxm from '@/lib/utils';

const AccordionItem = ({
  index,
  question,
  answer,
  activeItem,
  setActiveItem,
}) => {
  const contentEl = useRef();

  return (
    <div className='accordion-item overflow-hidden rounded-lg border-2 border-content/30'>
      <button
        className={clsxm(
          'flex w-full cursor-pointer justify-between border-none bg-gray-900 p-5 text-left text-white outline-none transition duration-500 ease-in-out'
        )}
        onClick={() => setActiveItem(index === activeItem ? -1 : index)}
      >
        <div>{question}</div>
        <div className='h4'>
          {index === activeItem ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <div
        ref={contentEl}
        className={clsxm(
          'max-h-0 overflow-hidden rounded-b-md bg-gray-900 text-gray-100 transition-[max-height] duration-500 ease-out',
          index === activeItem ? 'border-0 border-t-2 border-content/30' : ''
        )}
        style={
          index === activeItem
            ? {
                maxHeight: contentEl.current.scrollHeight,
              }
            : { maxHeight: '0px' }
        }
      >
        <div className='max-h-max py-6 px-3'>{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
