import { webinar } from '@/content/Webinars/index.content';

import WebinarCard from '@/components/Cards/WebinarCard';

const Upcoming = () => {
  return (
    <section id='upcoming'>
      <div className='layout py-20'>
        <h2 className='h1'>Upcoming webinars</h2>
        <hr className='styled-hr my-6' />

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {webinar.filter(
            (web) => new Date().getTime() < new Date(web.time).getTime()
          ).length > 0 ? (
            webinar
              .filter(
                (web) => new Date().getTime() < new Date(web.time).getTime()
              )
              .map((web) => {
                return <WebinarCard {...web} key={web.image} />;
              })
          ) : (
            <p>There no upcoming events right now</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default Upcoming;
