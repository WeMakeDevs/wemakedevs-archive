import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <section className='flex items-center justify-center py-32 text-center'>
      <div className='layout mx-auto mt-6 max-w-4xl'>
        <h1 className='heading'>
          Unleash your innovation at our
          <span className='highlight highlight--gradient block'>
            Hackathons
          </span>
        </h1>
        <p className='h3 my-5 font-medium text-content'>
          Unleash your coding prowess at our exhilarating hackathons.
          Collaborate, innovate, and showcase your projects!
        </p>
        <ArrowLink className='mx-auto' as={ButtonLink} href='#about'>
          About hackathons
        </ArrowLink>
      </div>
    </section>
  );
};
export default Hero;
