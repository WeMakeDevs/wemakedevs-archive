import './pages.css';

import Check from '../components/common/check';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';
import About from '../components/home/about';
import Courses from '../components/home/courses';
import Events from '../components/home/events';
import Header from '../components/home/header';
import Partner from '../components/home/Partner';
import Roadmap from '../components/home/roadmaps';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header className='header'></Header>
      <About></About>
      <Courses></Courses>
      <Events></Events>
      <Roadmap></Roadmap>
      <Partner></Partner>
      <Footer></Footer>
      <Check />
    </div>
  );
};

export default Home;
