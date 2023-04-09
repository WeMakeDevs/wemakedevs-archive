import Layout from '@/components/layout';
import {
  About,
  Announcement,
  GrandPrize,
  Hero,
  HowTakePart,
  Tracks,
} from '@/components/PageComp/HashnodePage';

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
