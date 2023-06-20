import Layout from '@/components/layout';
import {
  Hero,
  OngoingEvents,
  PastEvents,
  Testimonials,
} from '@/components/PageComp/EducationalEventsPage';

import { EducationalEventsPageContent } from './content';

const EducationalEventsPage = () => {
  return (
    <Layout content={EducationalEventsPageContent}>
      <Hero />
      <OngoingEvents />
      <PastEvents />
      <Testimonials />
    </Layout>
  );
};
export default EducationalEventsPage;
