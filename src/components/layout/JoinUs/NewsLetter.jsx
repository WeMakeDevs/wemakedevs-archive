import { useEffect, useState } from 'react';

const NewsLetter = () => {
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
    <div id='newsletter'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 text-center'>
        <h2 className='h1'>Subscribe to our newsletter</h2>
        <hr className='styled-hr' />
        <p className='h3'>Stay updated and never miss an opportunity.</p>

        <iframe
          src='https://wemakedevs-newsletter.netlify.app/'
          width='100%'
          height={iframeHeight}
          style={{ border: '0', scroll: 'no' }}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </div>
  );
};

export default NewsLetter;
