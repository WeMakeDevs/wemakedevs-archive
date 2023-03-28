import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <header className='bg-base-100 text-center'>
      <div className='layout flex h-screen flex-col items-center justify-center gap-4'>
        <h1 className='heading'>
          <span className='highlight highlight--light'>Boost your career</span>{' '}
          with our free courses!
        </h1>
        <p className='h3'>
          We believe that every student, irrespective of their college or
          branch, can make it big.
        </p>

        <ArrowLink as={ButtonLink} href='#about'>
          About courses
        </ArrowLink>
      </div>
    </header>
  );
};
export default Hero;
