import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <section className='flex h-screen items-center justify-center text-center'>
      <div className='layout'>
        <h1 className='heading'>
          Events that <br /> inspire{' '}
        </h1>
        <h2 className='h3 my-5 font-medium text-content'>
          Want to give back to the{' '}
          <span className='highlight highlight--light'> community </span>,
          compete for awesome{' '}
          <span className='highlight highlight--light'> rewards </span> network,
          and gain knowledge? 🎁 <br />
          If so, you've come to the correct place. Participate in the numerous{' '}
          <span className='highlight highlight--light'>
            incredible events{' '}
          </span>{' '}
          hosted by the WeMakeDevs community. Check out the following events and
          participate.
        </h2>
        <ArrowLink className='mx-auto' as={ButtonLink} href='#about'>
          About events
        </ArrowLink>
      </div>
    </section>
  );
};
export default Hero;
