import { useEffect, useState } from 'react';

const Register = ({ careerpath }) => {
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
    <section id='register'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
        <h2 className='h1'>Register for the program</h2>
        <hr className='styled-hr' />
        <p className='h3'>
          Register and learn from the indutry experts to level up your career
          path
        </p>
        {/* <iframe
          src='https://bed11154.sibforms.com/serve/MUIFAE8F2BThphv6c4u4ggOyklDWsGvPLdPGKMdf6qQ5KQr8jfX-foG49bRVz9K7TxLOgM4LpEV9IrXte1ZSxMmCG4SuP5K_eoTIdW7EvpB4l7phs4gQ9xlhlVAAT4bYfAJsQl9lSVISEdyLeuau3BNkBjxXWBSRsF8UcDHGw_7rzz7hOUzaGwdt1KlIf45xM_gkL-u8R6cgdrAP'
          width='100%'
          style={{ border: '0', backgroundColor: 'none' }}
          height={iframeHeight}
          title='Register for the program by entering your details below'
        ></iframe> */}
        <iframe
          src={`https://wemakedevs-newsletter.netlify.app/${careerpath}.html`}
          width='100%'
          style={{ border: '0' }}
          height={iframeHeight}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </section>
  );
};

export default Register;
