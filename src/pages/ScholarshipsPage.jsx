import Layout from '@/components/layout';
import {
  Hero,
  OngoingEvents,
  PastEvents,
  Testimonials,
} from '@/components/PageComp/ScholarshipsPage';

import { ScholarshipsPageContent } from './content';

const ScholarshipsPage = () => {
  return (
    <Layout content={ScholarshipsPageContent}>
      <Hero />
      <OngoingEvents />
      <PastEvents />
      <Testimonials />
    </Layout>
  );
};
export default ScholarshipsPage;
