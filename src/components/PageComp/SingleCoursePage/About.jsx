import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const About = ({ content }) => {
  return (
    <section id='about'>
      <div className='layout flex flex-col items-center justify-center pt-24 pb-20 text-center'>
        <h1 className='heading'>
          <span className='highlight highlight--light'>
            {content.title.highlight}
          </span>{' '}
          {content.title.normal}
        </h1>
        <p className='h3 mt-4'>{content.subtitle}</p>

        <iframe
          src={content.videoLink}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
        ></iframe>

        <div className='mt-8 flex gap-4'>
          {content.buttons.map((btn) => (
            <ArrowLink
              as={ButtonLink}
              href={btn.href}
              openNewTab
              key={btn.name}
            >
              {btn.name}
            </ArrowLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
