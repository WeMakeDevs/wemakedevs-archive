import { EventsPageContent } from './content';
import { About, Hero, Prize, Track } from 'components/eventspage';
import Layout from 'components/layout';


const EventsPage = () => {
  return (
    <>
      <Layout content={EventsPageContent}>
        <Hero />
        <About />
        <Prize />
        <Track />
      </Layout>
    </>
  );
};
export default EventsPage;
