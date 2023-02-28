import {
  About,
  Content,
  Courses,
  Events,
  Hero,
  Mentorship,
} from '@/components/home';
import Layout, { Banner } from '@/components/layout';

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
