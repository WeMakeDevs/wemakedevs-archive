import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { TfiAnnouncement } from 'react-icons/tfi';

import clsxm from '@/lib/utils';

import { ArrowLink, ButtonLink } from '@/components/links';

const Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    <section
      className={clsxm(
        'fixed inset-x-0 bottom-0 z-10 overflow-hidden',
        'bg-content/90 p-2 font-medium text-base-100 backdrop-blur',
        'transition-transform duration-300',
        !open && 'translate-y-full'
      )}
    >
      <div
        className='absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clippath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        ></div>
      </div>
      <div
        className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clippath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        ></div>
      </div>
      <div className='flex items-center justify-center gap-2'>
        {' '}
        <TfiAnnouncement className='h3 ml-auto shrink-0 rounded-lg text-base-100 ' />
        <p className='text-center font-medium text-base-100'>
          Checkout our upcoming{' '}
        </p>
        <ArrowLink
          className='rounded-full p-1 px-3'
          as={ButtonLink}
          href='/events'
          openNewTab
        >
          Events
        </ArrowLink>
        <button
          className='h3 ml-auto mr-6 flex shrink-0 items-center justify-center border-none text-base-100'
          onClick={() => setOpen(false)}
          aria-label='close button'
        >
          <IoMdClose />
        </button>
      </div>
    </section>
  );
};

export default Banner;
/**
 *    
       
    
        
 */
