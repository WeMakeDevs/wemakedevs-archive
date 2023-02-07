import { EventsPageContent } from './content';
import { About, Hero, Prize, Track } from 'components/eventspage';
import Layout from 'components/layout';
import ScrollToTop from '../components/ScrollToTop';


const EventsPage = () => {
  return (
    <>
      <Layout content={EventsPageContent}>
        <Hero />
        <About />
        <Prize />
        <Track />
      </Layout>
      <ScrollToTop />
    </>
  );
};
export default EventsPage;
