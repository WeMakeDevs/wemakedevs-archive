import {
  About,
  Content,
  Courses,
  Events,
  FAQ,
  Header,
  JoinUs,
  Mentorship,
  Partner,
} from '../components/home';
import PartnerTestimonials from '../components/home/PartnerTestimonials';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About background='gradient' />
      <Courses />
      <Mentorship background='gradient' />
      <Events />
      <Content background='gradient' />
      <JoinUs />
      <FAQ background='gradient' />
      <Partner />
      <PartnerTestimonials />
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
