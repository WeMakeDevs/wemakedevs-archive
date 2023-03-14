import clsx from 'clsx';

import styles from './index.module.css';

const Register = ({ register }) => {
  return (
    <div id='register' className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Regsiter for the webinar</h2>
        <hr className='styled-hr' />
        <p>Regsiter and learn </p>

        <iframe
          src={`https://wemakedevs-newsletter.vercel.app/${register}.html`}
          width='100%'
          style={{ border: '0' }}
          height='850'
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </div>
  );
};

export default Register;
