import React from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import Check from "../components/common/check";
import About from "../components/home/about";
// import Blog from "../../components/home/blog";
import Courses from "../components/home/courses";
import Events from "../components/home/events";
// import Founder from "../../components/home/founder";
import Header from "../components/home/header";
import Roadmap from "../components/home/roadmaps";
import Partner from "../components/home/Partner";
// import Podcast from "../../components/home/podcast";
// import Course from '../../../pages/CoursePage.js'
import './pages.css'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header className="header"></Header>
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