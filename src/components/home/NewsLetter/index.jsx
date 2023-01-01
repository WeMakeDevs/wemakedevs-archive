import clsx from 'clsx';
import { useState } from 'react';

import styles from './index.module.css';

import Button from '../../Button';
import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const STATUS = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
  invalid: 'INVALID',
  null: null,
};
const NewsLetter = ({ background = 'static' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(STATUS.null);

  const subscribe = async (e) => {
    e.preventDefault();
    setStatus(STATUS.loading);
    // Checkk if email is valid by regex
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setStatus(STATUS.invalid);
      return;
    }

    await fetch('https://blog.wemakedevs.org/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        publicationId: '61c2dc628614531beb60b0f5',
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.err) {
          setStatus(STATUS.failed);
          return;
        }
        setStatus(STATUS.success);
      })
      .catch(() => {
        setStatus(STATUS.failed);
      });
  };

  // eslint-disable-next-line no-console
  console.log(status);

  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Subscribe to NewsLetter</h2>
        <hr className='styled-hr' />
        <p>
          Subscribe to our newsletter and get every blog direct to your email.
        </p>
        <form onSubmit={subscribe} className={styles.btns}>
          <input
            disabled={status === STATUS.loading}
            type='text'
            name='email'
            value={email}
            id='email'
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
        {status === STATUS.success ? (
          <p className={styles.green}>
            Check the mail and confirm your subscription
          </p>
        ) : null}
        <p className={styles.red}>
          {status === STATUS.failed ? (
            <>
              Something went wrong try to subscribe on our
              <ArrowLink as={ButtonLink} href='https://blog.wemakedevs.org/'>
                Blog
              </ArrowLink>
            </>
          ) : status === STATUS.invalid ? (
            'Invalid email'
          ) : null}
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
