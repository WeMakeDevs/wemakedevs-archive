import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const About = ({ content }) => {
  return (
    <section id='about'>
      <div className='layout flex flex-col items-center justify-center py-20 pt-24 text-center'>
        <h1 className='heading heading-md highlight highlight--light'>
          {content.name}
        </h1>
        <p className='h3 my-8'>{content.description}</p>
        {content.videoUrl &&
        new Date().getTime() > new Date(content.time).getTime() ? (
          <iframe
            src={content.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
          ></iframe>
        ) : (
          <img
            src={content.poster}
            className='block aspect-video h-full w-full max-w-3xl rounded-2xl border-2 border-primary object-cover shadow-2xl shadow-primary/50'
          />
        )}

        <ArrowLink
          as={ButtonLink}
          className='mt-12 gap-2'
          href={
            new Date().getTime() < new Date(content.time).getTime()
              ? '#register'
              : content.videoUrl !== undefined
              ? content.videoUrl.replace('embed/', 'watch?v=')
              : '#'
          }
          openNewTab
        >
          {new Date().getTime() < new Date(content.time).getTime()
            ? 'Register'
            : 'Watch recap'}
        </ArrowLink>
      </div>
    </section>
  );
};

export default About;
