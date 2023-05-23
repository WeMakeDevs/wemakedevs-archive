import Layout from '@/components/layout';
import {
  Hero,
  OngoingEvents,
  PastEvents,
} from '@/components/PageComp/ScholarshipsPage';

import { ScholarshipsPageContent } from './content';

const ScholarshipsPage = () => {
  return (
    <Layout content={ScholarshipsPageContent}>
      <Hero />
      <OngoingEvents />
      <PastEvents />
    </Layout>
  );
};
export default ScholarshipsPage;
