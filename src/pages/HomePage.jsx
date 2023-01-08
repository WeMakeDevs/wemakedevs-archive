import {
  About,
  Content,
  Courses,
  Events,
  FAQ,
  Header,
  JoinUs,
  Mentorship,
  NewsLetter,
  Partner,
  Stats,
  Testimonials,
  Work,
} from '../components/home';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About background='gradient' />
      <Stats />
      <Courses background='gradient' />
      <Work />
      <Testimonials />
      <Mentorship />
      <Events background='gradient' />
      <Content />
      <NewsLetter />
      <JoinUs />
      <FAQ background='gradient' />
      <Partner />
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
