import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => {
  return (
    <section className='flex h-screen items-center justify-center text-center'>
      <div className='layout max-w-4xl'>
        <h1 className='heading'>Inspire. Educate. Empower</h1>
        <h2 className='h3 my-5 font-medium text-content'>
          This is a community which provides{' '}
          <span className='highlight highlight--yellow'>
            free hands-on training
          </span>{' '}
          in various fields of computer science and have an inclusive community
          focusing on a{' '}
          <span className='highlight highlight--yellow'>learn by doing</span>{' '}
          approach.
        </h2>
        <div className='flex flex-wrap justify-center gap-5'>
          <ArrowLink as={ButtonLink} href='#courses'>
            Courses
          </ArrowLink>
          <ArrowLink as={ButtonLink} href='#mentorship'>
            Mentorship
          </ArrowLink>
          <ArrowLink as={ButtonLink} href='#events'>
            Events
          </ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
