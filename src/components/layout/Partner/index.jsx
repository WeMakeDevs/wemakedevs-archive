import clsx from 'clsx';
import * as React from 'react';
import { BsClipboard } from 'react-icons/bs';

import styles from './index.module.css';

import Button from '@/components/Button';
import ButtonLink from '@/components/links/ButtonLink';

import PartnerTestimonials from './PartnerTestimonials';

const Partner = ({ background = 'static' }) => {
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
    <>
      <section
        id='partnerwithus'
        className={clsx(
          styles.section,
          background === 'gradient' ? 'gradient' : 'static-bg'
        )}
      >
        <div className={clsx('layout', styles.layout)}>
          <h2 className='h1'>Partner with us</h2>
          <hr className='styled-hr' />
          <p>
            You can partner with us if you want to host hackathons, talks and
            events. Let’s help each other and grow together!
          </p>
          <div className={styles.btns}>
            <ButtonLink
              variant='light-outline'
              href='mailto:kunal@wemakedevs.org'
              className='h3'
              isDarkBg={true}
            >
              kunal@wemakedevs.org
            </ButtonLink>
            <Button
              className={clsx('h3', styles.copy, copied && styles.copied)}
              onClick={copyEmail}
              aria-label='copy email to clipboard'
            >
              <BsClipboard />
            </Button>
          </div>
        </div>
        <PartnerTestimonials />
      </section>
    </>
  );
};

export default Partner;
