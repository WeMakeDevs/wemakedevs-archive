import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const Hero = ({ content }) => {
  return (
    <section id='hero'>
      <div className='layout flex flex-col items-center justify-center py-20 pt-32 md:flex-row md:justify-between'>
        <div className='flex flex-col items-center justify-center md:w-1/2 md:items-start md:justify-start'>
          <h1 className='h1 highlight highlight--light font-bold'>
            {content.name}
          </h1>
          <p className='my-8 text-center md:text-start'>
            {content.description}
          </p>
          <div className='flex flex-row items-center justify-center gap-6'>
            <ArrowLink
              as={ButtonLink}
              href='https://www.youtube.com/playlist?list=PL9gnSGHSqcno2fzgy_efUharYhkHJWxIX'
              openNewTab
            >
              Check Playlist
            </ArrowLink>
            <ArrowLink
              as={ButtonLink}
              href='https://www.hashnode.com/'
              openNewTab
            >
              Hashnode
            </ArrowLink>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:w-1/2 md:items-start md:justify-start'>
          {/* {content.videoUrl &&
        new Date().getTime() > new Date(content.time).getTime() ? ( */}
          <iframe
            src={content.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mt-10 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80 md:mx-5 md:mt-auto'
          ></iframe>
          {/* ) : (
        <img
          src={content.poster}
          className='block aspect-video h-full w-full max-w-3xl rounded-2xl border-2 border-primary object-cover shadow-2xl shadow-primary/50'
        />
        )} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
