import { Testimonials } from '@/components/home';
import Layout from '@/components/layout';
import { Hero, Past } from '@/components/Webinar';
import Upcoming from '@/components/Webinar/Upcoming';

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
