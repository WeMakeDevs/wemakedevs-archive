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

const HashnodePage = () => {
  return (
    <Layout content={HashnodePageContent}>
      <Hero />
      <Offer />
      <Announcement />
      <Prize />
      <Track />
      <HowTakePart />
    </Layout>
  );
};
export default HashnodePage;
