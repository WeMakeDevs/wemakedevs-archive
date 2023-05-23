import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <section className='flex h-screen items-center justify-center text-center'>
      <div className='layout'>
        <h1 className='text-center font-sans text-4xl font-black leading-relaxed text-content md:text-5xl lg:text-9xl'>
          WeMakeDevs{' '}
          <span className='highlight highlight--gradient lg:block'>
            Scholarships
          </span>
        </h1>
        <p className='h3 my-5 font-medium text-content'>
          Empowering Education and Supporting Lifelong Learning
        </p>
        <ArrowLink className='mx-auto' as={ButtonLink} href='#ongoing'>
          Ongoing scholarships
        </ArrowLink>
      </div>
    </section>
  );
};
export default Hero;
