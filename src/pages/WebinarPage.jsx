import Layout from '@/components/layout';
import Testimonials from '@/components/PageComp/HomePage/Testimonials';
import { Hero, Past, Upcoming } from '@/components/PageComp/WebinarPage';

const WebinarPage = ({ content }) => {
  return (
    <Layout content={content}>
      <Hero />
      <Upcoming />
      <Past />
      <Testimonials as='section' />
    </Layout>
  );
};
export default WebinarPage;
