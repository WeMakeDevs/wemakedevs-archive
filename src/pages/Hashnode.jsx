import { HashnodePageContent } from './content';
import { Hero, HowTakePart, Offer, Prize, Track } from '../components/hashnode';
import { FAQ, Footer, JoinUs, Navbar, Partner } from '../components/layout';

const HashnodePage = () => {
  return (
    <>
      <Navbar links={HashnodePageContent.header} />
      <Hero />
      <Offer />
      <Prize background='gradient' />
      <Track />
      <HowTakePart background='gradient' />
      <JoinUs background='gradient' />
      <FAQ faq={HashnodePageContent.faq} />
      <Partner background='gradient' />
      <Footer />
    </>
  );
};
export default HashnodePage;
