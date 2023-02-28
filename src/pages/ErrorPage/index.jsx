import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const ErrorPage = () => {
  const content = (
    <>
      <h1 className={styles['highHeading']}>404 !</h1>
      <h2>Page Not Found</h2>
      <p className={styles['description']}>
        Unfortunately, the page you are looking for does not exist. Please
        navigate to Home. Thank You
      </p>
    </>
  );

  return (
    <section className={styles['errorPageSection']}>
      <div className={styles['container']}>
        {content}
        <ArrowLink as={ButtonLink} href='/'>
          Back to home
        </ArrowLink>
      </div>
    </section>
  );
};

export default ErrorPage;
