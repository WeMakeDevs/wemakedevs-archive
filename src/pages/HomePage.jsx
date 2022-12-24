import About from '../components/home/about';
import Cards from '../components/home/about/cards';
import Courses from '../components/home/courses/index.jsx';
import Events from '../components/home/events';
import FAQ from '../components/home/FAQ';
import Header from '../components/home/header';
import JoinUs from '../components/home/JoinUs';
import Mentorship from '../components/home/Mentorship';
import Partner from '../components/home/Partner';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonial';
import Work from '../components/home/Work';
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
      <Stats />
      <Courses background='gradient' />
      <Work />
      <Testimonials />
      <Events background='gradient' />
      <Mentorship />
      <FAQ />
      <Partner background='gradient' />
      <JoinUs />
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
