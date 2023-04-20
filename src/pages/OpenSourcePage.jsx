import Layout from '@/components/layout';
import {
  About,
  Hero,
  OngoingEvents,
  PastEvents,
} from '@/components/PageComp/EventsPage';

import { EventsPageContent } from './content';

const OpenSourcePage = () => {
  return (
    <div>
      {' '}
      <Layout content={EventsPageContent}>
        <Hero />
        <About />

        <OngoingEvents />
        <PastEvents />
      </Layout>
    </div>
  );
};

export default OpenSourcePage;
