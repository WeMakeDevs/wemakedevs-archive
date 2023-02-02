import { CoursesPageContent } from './content';
import { About, Courses, Hero, Testimonials } from '../components/coursespage';
import { FAQ, Footer, JoinUs, Navbar, Partner } from '../components/layout';

const CoursesPage = () => {
  return (
    <>
      <Navbar links={CoursesPageContent.header} />
      <Hero />
      <About background='gradient' />
      <Courses />
      <Testimonials background='gradient' />
      <JoinUs />
      <FAQ faq={CoursesPageContent.faq} background='gradient' />
      <Partner />
      <Footer />
    </>
  );
};
export default CoursesPage;
