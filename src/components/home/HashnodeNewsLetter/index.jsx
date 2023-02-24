import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import Button from '.Button';

const STATUS = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
  invalid: 'INVALID',
  null: null,
};
const HashnodeNewsletter = ({ background = 'static' }) => {
  return (
    <section
      id='newsletter'
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Subscribe to our newsletter</h2>
        <hr className='styled-hr' />
        <p>
          Subscribe to our newsletter and get every blog direct to your email.
        </p>
        <form className={styles.btns}>
          <input
            disabled={status === STATUS.loading}
            type='text'
            name='email'
            id='email'
            required
            className={styles.input}
            placeholder='Enter your email'
          />
          <Button
            type='submit'
            isLoading={status === STATUS.loading}
            className={styles.btn}
          >
            Subscribe
          </Button>
        </form>
        {'status' === STATUS.success ? (
          <p className={styles.green}>
            Check the mail and confirm your subscription
          </p>
        ) : null}
        <p className={styles.red}>
          {'status' === STATUS.failed ? (
            <>
              Something went wrong try to subscribe on our
              <ArrowLink as={ButtonLink} href='https://blog.wemakedevs.org/'>
                Blog
              </ArrowLink>
            </>
          ) : 'status' === STATUS.invalid ? (
            'Invalid email'
          ) : null}
        </p>
      </div>
      <iframe
        src='https://newsletter-teal.vercel.app/'
        className={styles.frame}
      ></iframe>
    </section>
  );
};

export default HashnodeNewsletter;
