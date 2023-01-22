import { Header } from '../components/hashnode';
import { Offer } from '../components/hashnode';
import { Prize } from '../components/hashnode';
import { Track } from '../components/hashnode';
import { Shoutout } from '../components/hashnode';
import { FAQ, JoinUs, Partner } from '../components/home';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';

const HashnodePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Offer />
      <Prize />
      <Track />
      <Shoutout />
      <JoinUs />
      <FAQ />
      <Partner />
      <Footer />
    </>
  );
};
export default HashnodePage;
