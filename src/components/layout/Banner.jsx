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
        'bg-content p-2 font-medium text-base-100',
        'transition-transform duration-300',
        !open && 'translate-y-full'
      )}
    >
      <div className='flex items-center justify-center gap-2'>
        {' '}
        <TfiAnnouncement className='h1 ml-auto shrink-0 rounded-lg bg-base-100/80 p-2' />
        <p className='text-center'>
          Check out our{' '}
          <span className='highlight highlight--dark'> upcoming events </span>
          and{' '}
          <span className='highlight highlight--dark'>win exciting prizes</span>
          !
        </p>
        <ArrowLink
          className='rounded-md py-2 px-4'
          as={ButtonLink}
          href='/events'
          openNewTab
        >
          Events
        </ArrowLink>
        <button
          className='h3 ml-auto flex shrink-0 items-center justify-center border-none text-base-100'
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
