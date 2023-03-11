import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const About = ({ content }) => {
  return (
    <section id='about'>
      <div className='layout flex flex-col items-center justify-center py-20 pt-24 text-center'>
        <h1 className='heading highlight highlight--light'>{content.name}</h1>
        <p className='h3 my-8'>{content.description}</p>

        <img
          src={content.poster}
          className='block aspect-video h-full w-full max-w-3xl rounded-2xl border-2 border-primary object-cover shadow-2xl shadow-primary/50'
        />

        <ArrowLink
          as={ButtonLink}
          className='mt-12 gap-2'
          href='#register'
          openNewTab
        >
          Register
        </ArrowLink>
      </div>
    </section>
  );
};

export default About;
