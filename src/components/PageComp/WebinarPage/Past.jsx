import { webinar } from '@/content/Webinars/index.content';

import WebinarCard from '@/components/Cards/WebinarCard';

const Upcoming = () => {
  return (
    <section id='past'>
      <div className='layout py-20'>
        <h2 className='h1'>Past webinars</h2>
        <hr className='styled-hr my-6' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {webinar.filter(
            (web) => new Date().getTime() >= new Date(web.time).getTime()
          ).length > 0 ? (
            webinar
              .filter(
                (web) => new Date().getTime() >= new Date(web.time).getTime()
              )
              .map((web) => <WebinarCard {...web} key={web.image} />)
          ) : (
            <p>There no past events are happend till now</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default Upcoming;
