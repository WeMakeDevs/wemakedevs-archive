import Layout from '@/components/layout';
import {
  About,
  Hero,
  OngoingEvents,
  PastEvents,
} from '@/components/PageComp/EventsPage';

import OpenSourcePage from '@/pages/OpenSourcePage';

import { EventsPageContent } from './content';

const EventsPage = () => {
  return (
    <Layout content={EventsPageContent}>
      <Hero />
      <About />
      <OngoingEvents />
      <PastEvents />
      <OpenSourcePage />
    </Layout>
  );
};
export default EventsPage;
