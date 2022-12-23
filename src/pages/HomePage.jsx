import About from '../components/home/about';
import Courses from '../components/home/courses/index.jsx';
import Events from '../components/home/events';
import Header from '../components/home/header';
import Mentorship from '../components/home/Mentorship';
import Partner from '../components/home/Partner';
import Testimonials from '../components/home/Testimonial';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Courses />
      <Testimonials />
      <Events />
      <Mentorship />
      <Partner />
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
