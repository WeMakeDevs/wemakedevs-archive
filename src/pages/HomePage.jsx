import About from '../components/home/about';
import Courses from '../components/home/courses';
import Events from '../components/home/events';
import Header from '../components/home/header';
import Partner from '../components/home/Partner';
import Roadmap from '../components/home/roadmaps';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header className='header'></Header>
      <About></About>
      <Courses></Courses>
      <Events></Events>
      <Roadmap></Roadmap>
      <Partner></Partner>
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
