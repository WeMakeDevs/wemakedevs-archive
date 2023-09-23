import { useEffect, useState } from 'react';

const Register = ({ register }) => {
  const [iframeHeight, setIframeHeight] = useState(750);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      setIframeHeight(930);
    } else if (windowWidth < 1250) {
      setIframeHeight(1000);
    } else {
      setIframeHeight(750);
    }
  }, []);

  return (
    <div id='register'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
        <h2 className='h1'>Register for the webinar</h2>
        <hr className='styled-hr' />
        <p className='h3'>Register and learn by great developer and creators</p>
        <iframe
          src={`https://wemakedevs-newsletter.netlify.app/${register}.html`}
          width='100%'
          scrolling='no'
          style={{ border: '0', overflow: 'hidden' }}
          height={iframeHeight}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </div>
  );
};

export default Register;
