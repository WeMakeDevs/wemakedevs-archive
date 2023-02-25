import { useLocation, useNavigate } from 'react-router-dom';

import styles from './index.module.css';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const ErrorPage = () => {
  const currLocation = useLocation();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/', { state: currLocation, replace: true });
  };

  const content = (
    <>
      <h1 className={styles['highHeading']}>404 !</h1>
      <h2>page not found</h2>
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
        <span onClick={backToHome}>
          <ArrowLink as={ButtonLink}>Back To Home</ArrowLink>
        </span>
      </div>
    </section>
  );
};

export default ErrorPage;
