import Layout, { Banner } from '@/components/layout';
import {
  About,
  Content,
  Courses,
  Events,
  Hero,
  // Team,
} from '@/components/PageComp/HomePage';

import { HomePageContent } from './content';

const HomePage = () => {
  return (
    <>
      <Layout content={HomePageContent}>
        <Hero />
        <About />
        <Courses />
        <Events />
        <Content />
        {/* <Team /> */}
      </Layout>
      <Banner />
    </>
  );
};

export default HomePage;
