import * as React from 'react';
import { BsClipboard } from 'react-icons/bs';

import clsxm from '@/lib/utils';

import Button from '@/components/Button';
import ButtonLink from '@/components/links/ButtonLink';

import PartnerTestimonials from './PartnerTestimonials';

const Partner = () => {
  const [copied, setCopied] = React.useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('kunal@wemakedevs.org');
    setCopied(true);
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <section id='partnerwithus'>
      <div className='layout mx-auto flex flex-col items-center justify-center gap-6 py-20'>
        <h2 className='h1'>Partner with us</h2>
        <hr className='styled-hr' />
        <p className='max-w-xl text-center'>
          You can partner with us if you want to host hackathons, talks and
          events. Let’s help each other and grow together!
        </p>
        <div className='flex flex-nowrap gap-4'>
          <ButtonLink
            variant='light-outline'
            href='mailto:kunal@wemakedevs.org'
            className='h3 text-[min(1.125rem,6vw)]'
            isDarkBg={true}
          >
            kunal@wemakedevs.org
          </ButtonLink>
          <Button
            className={clsxm(
              'h3 relative rounded-full p-6 text-[min(1.125rem,6vw)]',
              "after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:origin-center after:-translate-x-1/2 after:-translate-y-[50%] after:scale-[.85] after:rounded after:bg-content after:px-2 after:text-xs after:text-base-100 after:opacity-0 after:transition-all after:duration-300 after:content-['Copied']",
              copied &&
                'after:translate-y-[50%] after:-translate-x-1/2 after:scale-100 after:opacity-100'
            )}
            onClick={copyEmail}
            aria-label='copy email to clipboard'
          >
            <BsClipboard />
          </Button>
        </div>
      </div>
      <PartnerTestimonials />
    </section>
  );
};

export default Partner;
