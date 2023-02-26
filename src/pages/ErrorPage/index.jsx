import { useLocation, useNavigate } from 'react-router-dom';

import styles from './index.module.css';

import Button from '@/components/Button';

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
      <p>
        Unfortunately, the page you are looking for does not exist. Please
        navigate to Home. Thank You
      </p>
    </>
  );

  return (
    <section className={styles['errorPageSection']}>
      <div className={styles['container']}>
        {content}
        <Button type='button' onClick={backToHome} className={styles['btn']}>
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
