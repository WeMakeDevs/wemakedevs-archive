import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TfiAnnouncement } from 'react-icons/tfi';

import clsxm from '@/lib/utils';

import { ArrowLink, ButtonLink } from '@/components/links';

const Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    <section
      className={clsxm(
        'fixed inset-x-0 bottom-0 z-10',
        'bg-content/90 p-2 font-medium text-base-100 backdrop-blur',
        'transition-transform duration-300',
        !open && 'translate-y-full'
      )}
    >
      <div className='flex items-center justify-center gap-2'>
        {' '}
        <TfiAnnouncement className='h1 ml-auto shrink-0 rounded-lg bg-base-100/80 p-2' />
        <p className='h3 text-center font-semibold text-base-100'>
          Checkout our upcoming{' '}
          <span className='highlight highlight--dark'>in-person event</span>{' '}
        </p>
        <ArrowLink
          className='rounded-md py-2 px-4'
          as={ButtonLink}
          href='/events/meetups/delhi-2023'
          openNewTab
        >
          Delhi Meetup
        </ArrowLink>
        <button
          className='h3 ml-auto mr-6 flex shrink-0 items-center justify-center border-none text-base-100'
          onClick={() => setOpen(false)}
          aria-label='close button'
        >
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default Banner;
/**
 *    
       
    
        
 */
