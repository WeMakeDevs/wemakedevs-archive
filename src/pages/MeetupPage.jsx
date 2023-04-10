import { meetups } from '@/content/Meetup';

import MeetupCard from '@/components/Cards/MeetupCard';
import Layout from '@/components/layout';
import { ButtonLink } from '@/components/links';

const MeetupPage = ({ content }) => {
  return (
    <Layout content={content}>
      {/* Hero Section */}
      <section id='hero' className='overflow-x-hidden'>
        <div className='layout min-h-main flex flex-col pt-24 pb-16'>
          <h1 className='mx-auto mt-6 max-w-4xl text-center font-normal'>
            <span className='highlight highlight--gradient'> Connect</span>,
            <span className='highlight highlight--gradient'> Learn</span>, and
            <span className='highlight highlight--gradient'> Grow </span>
            with Our Meetups
          </h1>
          <h2 className='h3 mx-auto mt-4 max-w-3xl text-center font-semibold '>
            Join and learn from inspiring talks, engaging workshops, and endless
            opportunities to grow and connect.
          </h2>
          <ButtonLink href='#upcoming' className='mx-auto mt-4'>
            Upcoming meetups
          </ButtonLink>

          <div className='relative mt-20 select-none'>
            {/* Background Style */}
            <div className='absolute top-10 left-1/2 z-0 flex -translate-x-1/2 rotate-12 -space-x-24'>
              <div className='aspect-video w-96 bg-purple-400 blur-3xl' />
              <div className='aspect-video w-96 bg-yellow-400 blur-3xl' />
            </div>
            {/* Box For All the images */}
            <div className='relative z-10 rounded-md border border-content/20 bg-base-100/80 p-2'>
              <div className='flex items-center justify-start gap-2 pl-2 pb-3 pt-1'>
                <span className='h4 mx-auto'>Past meetup</span>
              </div>
              <hr className='border-t-2 border-content/60 bg-transparent pt-2' />
              {/* All the Images */}
              <div className='grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:grid-cols-3'>
                {Array.from({ length: 9 }, () => '/assets/images/meetup/').map(
                  (speaker, i) => (
                    <img
                      key={i}
                      src={`${speaker}${i + 1}.jpeg`}
                      className='relative z-0 aspect-video w-full overflow-x-hidden rounded-md object-cover'
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Meetups */}
      <section id='upcoming'>
        <div className='layout py-20'>
          <h2 className='h1'>Upcoming meetups</h2>
          <hr className='styled-hr my-6' />

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {meetups.filter(
              (meetup) => new Date().getTime() < new Date(meetup.on).getTime()
            ).length > 0 ? (
              meetups
                .filter(
                  (meetup) =>
                    new Date().getTime() < new Date(meetup.on).getTime()
                )
                .map((meetup) => {
                  return <MeetupCard {...meetup} key={meetup.image} />;
                })
            ) : (
              <p>There no upcoming meetups right now</p>
            )}
          </div>
        </div>
      </section>

      {/* Past Meetups */}
      {/* <section id='past'>
        <div className='layout py-20'>
          <h2 className='h1'>Past meetups</h2>
          <hr className='styled-hr my-6' />

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {meetups.filter(
              (meetup) => new Date().getTime() > new Date(meetup.on).getTime()
            ).length > 0 ? (
              meetups
                .filter(
                  (meetup) =>
                    new Date().getTime() > new Date(meetup.on).getTime()
                )
                .map((meetup) => {
                  return <MeetupCard {...meetup} key={meetup.image} />;
                })
            ) : (
              <p>There no past meetups right now</p>
            )}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default MeetupPage;
