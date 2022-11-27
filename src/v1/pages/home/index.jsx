import React from "react";
import Footer from "../../components/common/footer";
import Navbar from "../../components/common/navbar";
import About from "../../components/home/about";
import Blog from "../../components/home/blog";
import Courses from "../../components/home/courses";
import Events from "../../components/home/events";
import Founder from "../../components/home/founder";
import Header from "../../components/home/header";
import Mentorship from "../../components/home/mentorship";
import Podcast from "../../components/home/podcast";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Courses></Courses>
      <Events></Events>
      <Mentorship></Mentorship>
      <Podcast></Podcast>
      <Blog></Blog>
      <Founder></Founder>
      <Footer></Footer>
    </div>
  );
};

export default Home;
