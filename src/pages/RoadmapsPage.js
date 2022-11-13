import React, { useRef,useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Header from "../components/Roadmap/Header.js";
import Mentorship from "../components/Roadmap/Mentorship.js";
import CardsList from "../components/Roadmap/CardsList.js";

const RoadmapsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  const scrollRoadmapRef = useRef();

  return (
    <div RoadmapsPage="homepage_main">
      <Navbar />
      <Header scrollRoadmapRef={scrollRoadmapRef}/>
      <Mentorship />
      <CardsList scrollRoadmapRef={scrollRoadmapRef}/>
      <Footer />
    </div>
  );
};

export default RoadmapsPage;

