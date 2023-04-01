import Layout, { Banner } from '@/components/layout';
import {
  About,
  Content,
  Courses,
  Events,
  Hero,
  Mentorship,
} from '@/components/PageComp/HomePage';

import { HomePageContent } from './content';

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
