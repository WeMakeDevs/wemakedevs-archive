import { CoursesPageContent } from './content';
import { Testimonials } from '../components/coursespage';
import Layout from '../components/layout';
import { About } from '../components/SingleCoursePage';

const CoursesPage = () => {
  return (
    <Layout content={CoursesPageContent}>
      <About />
      <Testimonials />
    </Layout>
  );
};
export default CoursesPage;
