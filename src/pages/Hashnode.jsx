import { HashnodePageContent } from './content';
import {
  Announcement,
  Hero,
  HowTakePart,
  Offer,
  Prize,
  Track,
} from '../components/hashnode';
import Layout from '../components/layout';
import ScrollToTop from '../components/ScrollToTop';

const HashnodePage = () => {
  return (
    <>
      <Layout content={HashnodePageContent}>
        <Hero />
        <Offer />
        <Prize />
        <Announcement />
        <Track />
        <HowTakePart />
      </Layout>
      <ScrollToTop />
    </>
  );
};
export default HashnodePage;
