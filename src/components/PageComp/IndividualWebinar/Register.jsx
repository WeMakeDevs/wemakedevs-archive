import { useEffect, useState } from 'react';

const Register = ({ register }) => {
  const [iframeHeight, setIframeHeight] = useState(670);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      setIframeHeight(830);
    } else if (windowWidth < 1250) {
      setIframeHeight(700);
    } else {
      setIframeHeight(670);
    }
  }, []);

  return (
    <div id='register'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
        <h2 className='h1'>Regsiter for the webinar</h2>
        <hr className='styled-hr' />
        <p className='h3'>Regsiter and learn by great developer and creators</p>
        <iframe
          src={`https://wemakedevs-newsletter.vercel.app/${register}.html`}
          width='100%'
          style={{ border: '0' }}
          height={iframeHeight}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </div>
  );
};

export default Register;
