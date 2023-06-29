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
          Would you like to contribute to the{' '}
          <span className='highlight highlight--light'> community? </span>,
          and be{' '}
          <span className='highlight highlight--light'> rewarded 🎁, </span> Are you eager to participate in a Global-Network that offers valuable incentives and opportunities to expand your knowledge?  <br />
          If so, you've come to the right place. Join us in engaging with the diverse range of{' '}
          <span className='highlight highlight--light'>
            incredible events{' '}
          </span>{' '}
          hosted by the WeMakeDevs community. Take a moment to explore the ongoing events and become an active participant.
        </h2>
        <ArrowLink className='mx-auto' as={ButtonLink} href='#about'>
          Learn more
        </ArrowLink>
      </div>
    </section>
  );
};
export default Hero;
