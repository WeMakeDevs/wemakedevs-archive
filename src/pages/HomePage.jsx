import { HomePageContent } from './content';
import {
  About,
  Content,
  Courses,
  Events,
  Hero,
  Mentorship,
} from '../components/home';
import Layout, { Banner } from '../components/layout';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
  return (
    <>
      <Layout content={HomePageContent}>
        <Hero />
        <About />
        <Courses />
        <Mentorship />
        <Events />
        <Content />
      </Layout>
      <Banner />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
