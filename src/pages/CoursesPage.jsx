import { CoursesPageContent } from './content';
import { About, Courses, Hero, Testimonials } from 'components/coursespage';
import Layout from 'components/layout';
import ScrollToTop from '../components/ScrollToTop';

const CoursesPage = () => {
  return (
    <>
      <Layout content={CoursesPageContent}>
        <Hero />
        <About />
        <Courses />
        <Testimonials />
      </Layout>
      <ScrollToTop />
    </>
  );
};
export default CoursesPage;
