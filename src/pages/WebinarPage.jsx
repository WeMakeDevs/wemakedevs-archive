import Layout from '@/components/layout';
import { Hero, Past } from '@/components/Webinar';
import Upcoming from '@/components/Webinar/Upcoming';

const WebinarPage = ({ content }) => {
  return (
    <Layout content={content}>
      <Hero />
      <Upcoming />
      <Past />
    </Layout>
  );
};
export default WebinarPage;
