import { About, Courses, Hero, Testimonials } from '@/components/coursespage';
import Layout from '@/components/layout';

import { CoursesPageContent } from './content';

const CoursesPage = () => {
  return (
    <Layout content={CoursesPageContent}>
      <Hero />
      <About />
      <Courses />
      <Testimonials />
    </Layout>
  );
};
export default CoursesPage;
