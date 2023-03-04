import Layout from '@/components/layout';
import {
  About,
  Hero,
  OngoingEvents,
  PastEvents,
} from '@/components/PageComp/EventsPage';

import { EventsPageContent } from './content';

const EventsPage = () => {
  return (
    <Layout content={EventsPageContent}>
      <Hero />
      <About />
      <OngoingEvents />
      <PastEvents />
    </Layout>
  );
};
export default EventsPage;
