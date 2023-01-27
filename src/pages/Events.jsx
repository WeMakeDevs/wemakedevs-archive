import {
  About,
  Hero,
  Prize,
  Shoutout,
  Stats,
  Track,
} from '../components/eventspage';
import { FAQ, JoinUs, Partner } from '../components/home';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About background='gradient' />
      <Stats background='gradient' />
      <Shoutout background='gradient' />
      <Prize background='gradient' />
      <Track />
      <JoinUs background='gradient' />
      <FAQ />
      <Partner background='gradient' />
      <Footer />
    </>
  );
};
export default EventsPage;
