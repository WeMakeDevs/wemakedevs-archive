import { About, Hero, Prize, Track } from '@/components/eventspage';
import Layout from '@/components/layout';

import { EventsPageContent } from './content';

const EventsPage = () => {
  return (
    <Layout content={EventsPageContent}>
      <Hero />
      <About />
      <Prize />
      <Track />
    </Layout>
  );
};
export default EventsPage;
