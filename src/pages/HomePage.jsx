import {
  About,
  Blogs,
  Cards,
  Courses,
  Events,
  FAQ,
  Header,
  JoinUs,
  Mentorship,
  NewsLetter,
  Partner,
  Podcast,
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
      <Cards />
      <Courses background='gradient' />
      <Stats />
      <Work />
      <Testimonials />
      <Mentorship />
      <Podcast />
      <Events background='gradient' />
      <Blogs />
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
