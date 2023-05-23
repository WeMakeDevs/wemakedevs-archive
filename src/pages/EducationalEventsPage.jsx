import Layout from '@/components/layout';
import {
  Hero,
  OngoingEvents,
  PastEvents,
} from '@/components/PageComp/EducationalEventsPage';

import { EducationalEventsPageContent } from './content';

const EducationalEventsPage = () => {
  return (
    <Layout content={EducationalEventsPageContent}>
      <Hero />
      <OngoingEvents />
      <PastEvents />
    </Layout>
  );
};
export default EducationalEventsPage;
