import { useEffect, useState } from 'react';

import { getDateTime } from '@/lib/utils';

import SpeakerCard from '@/components/Cards/SpeakerCard';
import SponserCard from '@/components/Cards/SponserCard';
import { FAQ, Footer, Navbar } from '@/components/layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const MeetupPage = ({ content }) => {
  return (
    <Layout content={content}>
      <section id='about'>
        <div className='layout flex flex-col items-center justify-center gap-4 py-32 text-center'>
          <h1 className='heading highlight'>{content.title}</h1>
          <h2>
            {content.description.map((textObj) => (
              <>
                {textObj.type === 'higlight' ? (
                  <span className='highlight'> {textObj.text} </span>
                ) : (
                  textObj.text
                )}
              </>
            ))}
          </h2>
          <div className='h2 mt-10 font-normal'>
            {getDateTime(content.on)} onwards
          </div>
          <ButtonLink as={ArrowLink} href='#register'>
            Register
          </ButtonLink>
        </div>
      </section>
      <section id='agenda'>
        <div className='layout py-20'>
          <h2 className='h1 text-center'>Agenda</h2>
          <hr className='styled-hr mx-auto my-6' />
          <ol className='mx-auto mt-9 grid grid-cols-1'>
            {/* When we add agenda then uncomment the below code and remove above line */}
            {/* <ol className='mx-auto mt-9 grid grid-cols-1 justify-center lg:grid-cols-[repeat(2,_minmax(0,32rem))]'> */}
            <h3 className='h4 text-center'>
              Agenda is going to be announced soon...
            </h3>
          </ol>
        </div>
      </section>
      <section id='speakers'>
        <div className='layout py-20'>
          <h2 className='h1'>Speakers</h2>
          <hr className='styled-hr my-6' />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {content.speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </div>
      </section>
      <section id='sponser'>
        <div className='layout py-16 text-center'>
          <h2 className='h1 '>Sponsors</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <ol className='flex flex-wrap items-center justify-center gap-6'>
            {content.sponsors.length > 0 ? (
              content.sponsors.map((sponser) => (
                <SponserCard key={sponser.name} {...sponser} />
              ))
            ) : (
              <h3 className='h4'>Sponsors are going to be announced soon...</h3>
            )}
          </ol>
        </div>
      </section>
      <section id='com-sponser'>
        <div className='layout py-16 text-center'>
          <h2 className='h1 '>Community partners</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <ol className='flex flex-wrap items-center justify-center gap-6'>
            {content.comuSponsors.length > 0 ? (
              content.comuSponsors.map((sponser) => (
                <SponserCard key={sponser.name} {...sponser} />
              ))
            ) : (
              <h3 className='h4'>
                Community partners are going to be announced soon...
              </h3>
            )}
          </ol>
        </div>
      </section>
      <section id='past-meetup'>
        <div className='py-20 text-center'>
          <h2 className='h1'>Glimpse of past meetup</h2>
          <hr className='styled-hr my-6 mx-auto' />
          <div className='layout grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 9 }, () => '/assets/images/meetup/').map(
              (prevImg, i) => (
                <figure
                  key={i}
                  className='relative aspect-video w-full overflow-hidden rounded-md'
                >
                  <img
                    src={`${prevImg}${i + 1}.jpeg`}
                    className='object-center'
                  />
                </figure>
              )
            )}
          </div>
        </div>
      </section>
      <Register name={content.slug} />
    </Layout>
  );
};

export default MeetupPage;

const Layout = ({ content, children }) => {
  return (
    <>
      <Navbar links={content.header} cta={content.CTA} />
      <main className='main'>
        {children}
        <FAQ faq={content.faq} />
      </main>
      <Footer />
    </>
  );
};

const Register = ({ name }) => {
  const [iframeHeight, setIframeHeight] = useState(790);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      setIframeHeight(890);
    } else if (windowWidth < 1250) {
      setIframeHeight(700);
    } else {
      setIframeHeight(790);
    }
  }, []);

  return (
    <section id='register'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center'>
        <h2 className='h1'>Register for the meetup</h2>
        <hr className='styled-hr' />
        <iframe
          src={`https://wemakedevs-newsletter.vercel.app/${name}.html`}
          width='100%'
          style={{ border: '0' }}
          height={iframeHeight}
          title='Subscribe to our newsletter by entering your details below'
        ></iframe>
      </div>
    </section>
  );
};
