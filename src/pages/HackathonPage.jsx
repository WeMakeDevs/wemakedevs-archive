import Layout from '@/components/layout';
import {
  About,
  Hero,
  OngoingEvents,
  PastEvents,
  Testimonials,
} from '@/components/PageComp/HackathonsPage';

import { HackathonsPageContent } from './content';

const HackathonsPage = () => {
  return (
    <Layout content={HackathonsPageContent}>
      <Hero />
      <About />
      <OngoingEvents />
      <PastEvents />
      <Testimonials />
    </Layout>
  );
};
export default HackathonsPage;
