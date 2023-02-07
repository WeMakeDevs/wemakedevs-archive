import { HashnodePageContent } from './content';
import { Hero, HowTakePart, Offer, Prize, Track } from '../components/hashnode';
import Annoucnment from '../components/hashnode/Annoucment';
import Layout from '../components/layout';
import ScrollToTop from '../components/ScrollToTop';

const HashnodePage = () => {
  return (
    <>
      <Layout content={HashnodePageContent}>
        <Hero />
        <Offer />
        <Prize />
        <Track />
        <Annoucnment />
        <HowTakePart />
      </Layout>
      <ScrollToTop />
    </>
  );
};
export default HashnodePage;
