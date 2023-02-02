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
    </>
  );
};

export default HomePage;
