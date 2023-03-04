import {
  About,
  Announcement,
  GrandPrize,
  Hero,
  HowTakePart,
  Tracks,
} from '@/components/hashnode';
import Layout from '@/components/layout';

import { HashnodePageContent } from './content';

const HashnodePage = () => {
  return (
    <Layout content={HashnodePageContent}>
      <Hero />
      <About />
      <GrandPrize />
      <Announcement />
      <Tracks />
      <HowTakePart />
    </Layout>
  );
};
export default HashnodePage;
