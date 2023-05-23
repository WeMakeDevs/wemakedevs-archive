import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <section className='flex h-screen items-center justify-center text-center'>
      <div className='layout'>
        <h1 className='heading'>
          Dive into our
          <span className='highlight highlight--gradient block'>
            Educational Events{' '}
          </span>
        </h1>
        <p className='h3 my-5 font-medium text-content'>
          Expand your horizons and embrace the joy of lifelong learning by
          immersing yourself in inspiring educational events designed to fuel
          your passion for knowledge and empower your future success.
        </p>
        <ArrowLink className='mx-auto' as={ButtonLink} href='#about'>
          About events
        </ArrowLink>
      </div>
    </section>
  );
};
export default Hero;
