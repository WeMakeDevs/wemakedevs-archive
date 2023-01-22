import { Hero, Offer, Prize, Shoutout, Track } from '../components/hashnode';
import { FAQ, JoinUs, Partner } from '../components/home';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';

const HashnodePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <Prize background='gradient' />
      <Track />
      <Shoutout background='gradient' />
      <JoinUs background='gradient' />
      <FAQ />
      <Partner background='gradient' />
      <Footer />
    </>
  );
};
export default HashnodePage;
